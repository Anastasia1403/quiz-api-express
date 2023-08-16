import Router from "express";
import QuizController from "./QuizController.js";

const router = new Router();

router.post('/quizzes', QuizController.create);
router.get('/quizzes', QuizController.getAll);
router.get('/quizzes/:id', QuizController.getOne);
// router.delete('/quizzes/:id');
// router.put('/quizzes/:id');

export default router;