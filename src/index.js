import dotenv from "dotenv"
import dbConnecter from "./db/index.js";
dotenv.config({
    path: './.env'
})



dbConnecter()








// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express"

// const app = express()

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.sourceMapsEnabled.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROE", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is listening on PORT ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR", error)
//         throw error
        
//     }
// })()