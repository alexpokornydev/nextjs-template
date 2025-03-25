import Project from "@/models/Project";
import Rate from "@/models/Rate";
import { IProject } from "@/types/IProject";
import { IRating } from "@/types/IRating";
import {NextApiRequest,NextApiResponse} from "next";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const type = req.headers.type;

    if(!type){
        res.status(400).json({
            details:{
                status: "Bad request",
                code: 400,
                success: false
            },
            message: "Type is not set!"
        });
    }

    switch(type){
        case "projects":
            const projects:IProject[] = [
                {
                    _id: 1,
                    name: "AquaCord.eu",
                    description: "Jednoduchý web pro minecraft server. S tmavým i světlím řežimem",
                    date: "2025-06-25",
                    url: "https://www.aquacord.eu",
                    technologies: ["Next.js","TailwindCSS"],
                    benefits: ["Responzivní jednoduchý design"]
                },
            ];
            
            if(projects.length !== 0){
                res.status(200).json({
                    details:{
                        status: "OK",
                        code: 200,
                        success: true
                    },
                    data: projects
                });
            }else{
                res.status(204).json({
                    details:{
                        status: "No content",
                        code: 204,
                        success: true
                    },
                    message: "Nyní zde nejsou žádné projekty!",
                    data:[]
                });
            }
        case "ratings":
            const ratings:IRating[] = [
                {
                    _id: 1,
                    name: "Viphar",
                    description: "Web vypadá moc hezky, developer ví co dělá, poslouchá požadavky a správně je plní. Jsem spokojený a doporučuji ostatním",
                    stars: 5
                },
            ];
            
            if(ratings.length !== 0){
                res.status(200).json({
                    details:{
                        status: "OK",
                        code: 200,
                        success: true
                    },
                    data: ratings
                });
            }else{
                res.status(204).json({
                    details:{
                        status: "No content",
                        code: 204,
                        success: true
                    },
                    message: "Nyní zde nejsou žádná hodnocení!",
                    data:[]
                });
            }
    }
}
