console.log('start')
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router.js";

const PORT = 5000;
const DB_URL = 'mongodb+srv://anastasiya:Loc5SfQNMKDTSfKH@cluster0.nwmeilj.mongodb.net/?retryWrites=true&w=majority'
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);


async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('listening on port ' + PORT))
    } catch (err) {
        console.log(err)
    }
}


startApp();