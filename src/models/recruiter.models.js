import mongoose, {Schema, model} from "mongoose";

const recruiterSchema = new Schema(
    {
        companyName : {
            type : String,
            required : true
        },
        companyImage : [
            {
                type : String
            }
        ],
        address : {
            type : String
        },
        reviews : [
            {
                type : String
            }
        ],
        AboutUs : {
            type: String,
            required : true
        },
        JobsPosted : [
            {
                type : Schema.Types.ObjectId,
                ref : "Jobs"
            }
        ],
        InternshipsPosted : [
            {
                type : Schema.Types.ObjectId,
                ref : "Internships"
            }
        ]
    }, {timestamps : true}
);

const Recruiter = model("Recruiter", recruiterSchema);

