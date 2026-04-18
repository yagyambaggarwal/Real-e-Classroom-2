import dotenv from "dotenv";
dotenv.config();
import { dbConnect } from "./db/index.js";
import { app } from "./app.js";

const port = 5000


dbConnect().
then(() => {
    app.listen(port, () => {
        console.log("App is live at", port)
    })
})
.catch((err) => {
    console.log(err)
    throw err;
})
