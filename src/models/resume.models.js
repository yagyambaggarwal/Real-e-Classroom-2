import mongoose, {Schema, model} from "mongoose";

const resumeSchema = new Schema(
    {
        // Link of uploaded resume pdf on AWS S3
        ResumeUrl : String,
        
        // raw text of resume coming from pdf-parse
        ResumeText : String,

        // Structured fields from AI parsing of resume
        Name : String,
        Email : String,
        Phone : Number,
        Skills : [String],
        ExperienceYears : String,
        CurrentJobTitle : String,
        Education : [String],
        Summary : String
    }, {timestamps: true}
);

export const Resume = model("Resume", resumeSchema);