import mongoose, {Schema, model} from "mongoose";


const userSchema = new Schema(
    {
        RefreshToken : {
            type : String,
            required : true
        },
        Username : {
            type : String,
            required : true 
        },
        CoverImage : {    //Getting the URL from cloudinary
            type : String
        },
        ProfileImage : {
            type : String
        },
        LinkedinLink : {
            type : String
        },
        GithubLink : String,

        Projects : {  //User will be uploading project on drive or will be deploying and put the live link here
            type : String
        },
        UserType : {
            type : String,
            enums = ["Student", "Recruiter"],
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true
        },
        contactNumber : {
            type : Number,
            required : true
        },
        RecruiterDetails : {
            type : Schema.Types.ObjectId,
            ref : "Recruiter"
        },
        // User will upload -> Cloudinary -> Get Link here 
        Resume : {
            type : Schema.Types.ObjectId,
            ref : "Resume"
        },
        JobsApplied : [
            {
                type : Schema.Types.ObjectId,
                ref : "Jobs"
            }
        ],
        JobsPosted : [
            {
                type : Schema.Types.ObjectId,
                ref : "Jobs"
            }
        ],
        InternshipsApplied : [
            {
                type : Schema.Types.ObjectId,
                ref : "Internships"
            }
        ],
        InternshipsPosted : [
            {
                type : Schema.Types.ObjectId,
                ref : "Internships"
            }
        ],
        AboutMe : {
            type : String,
            required : true
        }
    }, {timestamps : true}
);

export const User = model("User", userSchema);

