import axios from "axios";

export async function fetchRatings(){
    try{
        const res = await axios.get("/api",{
            headers:{
                type: "ratings"
            }
        });

        if(res.status === 200){
            return res.data.data;
        }else{
            console.log(res.data.message);
            return res.data.message;
        }
    }catch(exception){
        console.error(exception);
    }
}