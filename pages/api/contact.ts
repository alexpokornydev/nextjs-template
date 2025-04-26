import axios from "axios";
import {NextApiRequest,NextApiResponse} from "next";
import RateLimit from "express-rate-limit";

const limiter = RateLimit({
    windowMs: 60 * 60 * 1000, 
    max: 10,
    message:{
        error: "Příliš mnoho požadavků - zkuste to znovu za hodinu! 😅",
    },
    keyGenerator:(req) => {
        const clientIp = (req.headers["x-forwarded-for"] as string) || req.socket.remoteAddress || "";
        return Array.isArray(clientIp)? clientIp[0]:clientIp;
    },
    standardHeaders: true,
    legacyHeaders: false
});

function runMiddleware(req:NextApiRequest,res:NextApiResponse,fn:Function){
    return new Promise((resolve,reject) => {
        fn(req,res,(result:any) => {
            if(result instanceof Error) return reject(result);
            return resolve(result);
        });
    });
}

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const {name,mail,request} = req.body;
    let data;

    if(!name || !mail || !request) return res.status(400).json({ 
        error: "Missing required fields" 
    });

    data = {
        content: "Ahoj, <@754385522570428537>! 👋\nMáš novou zakázku! 😍",
        embeds:[{
            color: 0xFF0053,
            title: "**__Emailová adresa__**",
            description: `> **${mail}**`
        },{
            color: 0xFF0053,
            title: "**__Jméno a příjmení__**",
            description: `> **${name}**`
        },{
            color: 0xFF0053,
            title: "**__Požadavek__**",
            description: `> ${request}`
        }]
    }

    try{
        await runMiddleware(req, res, limiter);

        const respon = await axios.post(process.env.WEBHOOK_URL!,data);

        if(respon.status === 200){
            res.status(200).json({
                details:{
                    status: "OK",
                    code: 200,
                    success: true
                },
                message: "Formulář byl úspěšně odeslán!"
            });
        }else{
            return res.status(respon.status).json({
                details:{
                    status: "Error",
                    code: 500,
                    success: false
                },
                message: "Nastala chyba na straně Discord Api!"
            });
        }
    }catch(exception){
        console.error(exception);
        
        return res.status(500).json({ 
            details:{
                status: "Error",
                code: 500,
                success: false
            },
            message: "Nastala chyba na straně serveru!"
        });
    }
}