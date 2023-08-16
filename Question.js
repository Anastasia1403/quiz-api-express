import mongoose from "mongoose";
import Answer from "./Answer.js";

const Question = new mongoose.Schema({
    text: {type: String, required: true},
    questionType: {type: String, required: true},
    answers: {type: [Answer.schema], required: true},

})

export default mongoose.model('Question', Question)