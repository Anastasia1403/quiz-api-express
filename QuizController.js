import Quiz from "./Quiz.js";

class QuizController {
    async create(req, res) {
        try {
            const { title, description, questions } = req.body;
            const quiz = await Quiz.create({ title, description, questions });
            console.log(quiz)
            res.status(200).json(quiz)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async getAll(req, res) {
        try {
            const quizzes = await Quiz.find()
            return res.json(quizzes)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async getOne(req, res) {
        try {
            const {id} = req.params;
            if (!id) res.status(400).json({message: "id is required"})
            const quiz = await Quiz.findById(id);
            return res.json(quiz)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}
export default new QuizController();