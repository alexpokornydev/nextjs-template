import {Document,Schema,models,model} from "mongoose";

interface IProject extends Document{
    name: string;
    description: string;
    date: string;
    url: string;
    technologies: string[];
    benefits: string[];
}

const Project = new Schema<IProject>({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true,
        unique: true
    },
    technologies:{
        type: [String],
        required: true
    },
    benefits:{
        type: [String],
        required: true
    }
},{collection:"projects"});

export default models.Project || model("Project",Project);