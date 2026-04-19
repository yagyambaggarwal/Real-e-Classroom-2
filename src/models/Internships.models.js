import mongoose, {Schema, model} from "mongoose";

const internshipsSchema = new Schema(
    {
        InternshipTitle : {
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
        Stipend : String,
        SkillsRequired : [String],
        Eligibility : String,
        LastDateToApply : Date,
        ApplyLink : String
    }, {timestamps: true}
);

export const Internships = model("Internships", internshipsSchema);