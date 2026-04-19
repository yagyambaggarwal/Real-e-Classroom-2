import mongoose, {Schema, model} from "mongoose";

const jobsSchema = new Schema(
    {
        JobTitle : {
            type : String,
            required : true
        },
        companyName : {
            type : Schema.Types.ObjectId,
            ref : "Recruiter"
        },
        JobDescription : {
            type : String,
            required : true
        },
        PostedOn : Date,
        Salary : String,
        SkillsRequired : [String],
        Eligibility : String,
        LastDateToApply : Date,
        ApplyLink : String
    }, {timestamps: true}
);

export const Jobs = model("Jobs", jobsSchema);