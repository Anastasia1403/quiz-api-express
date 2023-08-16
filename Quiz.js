import mongoose from "mongoose";
import Question from "./Question.js";

const Quiz = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    questions: {
        type: [Question.schema], required: true},
})

export default mongoose.model('Quiz', Quiz)