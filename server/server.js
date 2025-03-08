import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";

import { fileURLToPath } from 'url';
import { dirname } from 'path';



import {connectDb} from "./connection.js";
import adminRouter from "./routes/eventsRouter.js";
import  Event from "./mongo.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.set("view-engine", "ejs");
app.use("/server/static", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.get("/",async(req,res) => {
   res.send("Build Success");
})

app.get("/admin",async (req, res) => {
  try{
    const events = await Event.find();
    res.render("eventPanel.ejs", { events: events });
  }
  catch(error){
    console.log(error);
  }
});


app.use('/admin', adminRouter);



const port = process.env.PORT ||  5001;

const start = async() => {
    try{
       await connectDb(process.env.MONGO_URL);
       app.listen(port,() => console.log("Server running successfull!!y"))
    }
    catch(error){
        console.log(error);
    }
}


start();





