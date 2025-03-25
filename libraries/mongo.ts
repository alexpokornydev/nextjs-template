import mongoose from "mongoose";

export async function connectMongo(url:string){
    if(mongoose.connection.readyState === 0){
        try{
            await mongoose.connect(url);
            console.log("Připojeno k databázovému serveru!");
        }catch(exception){
            console.error(exception);
        }
    }
}