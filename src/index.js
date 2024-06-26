import dotenv from "dotenv"
import {dbConnecter} from "./db/index.js"
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



dbConnecter()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})








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