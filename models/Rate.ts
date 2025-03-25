import {Document,Schema,models,model} from "mongoose";

interface IRating extends Document{
    name: string;
    description: string;
    stars: number;
}

const Rating = new Schema<IRating>({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    stars:{
        type: Number,
        required: true
    }
},{collection:"ratings"});

export default models.Rating || model("Rating",Rating);