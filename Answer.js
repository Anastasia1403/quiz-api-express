import mongoose from "mongoose";

const Answer = new mongoose.Schema({
    // id: {type: mongoose.ObjectId, required: true},
    text: {type: String, required: true},
    isCorrect: {type: Boolean, required: true},
})
export default mongoose.model('Answer', Answer)