import express from "express"
import Cros from "cros"
import cookieParser from "cookie-parser"


const app = express()

app.use(Cros({
    origin : process.env.CROS_ORIGEN,
    Credential: true
}))
app.use(express.urlencoded({extended : true , limit: "16kb"}))
app.use(express.static("public"))
app.use(express.json({limit:"16kb"}))
app.use(cookieParser())


export {app}