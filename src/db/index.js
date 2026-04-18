import mongoose from "mongoose";
import { db_name } from "../constants.js";



export const dbConnect = async () => {

    try {
        const connectionString = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        console.log("Mongoose connected !", connectionString)
    } catch (error) {
        console.log("DB Error: ", error)
        throw error
    }

}
