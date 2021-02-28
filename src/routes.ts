import { Router } from "express";
import { AnswerController } from "./controllers/AnswerController";
import { SendMailController } from "./controllers/SendMailController";
import { SurveyController } from "./controllers/SurveyController";
import { UserController } from "./controllers/UserController";
import { NpsController } from "./controllers/NpsController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveyController();
const sendMailController = new SendMailController();

const answerController = new AnswerController();

const npsContrroler = new NpsController();

router.post("/users", userController.create)

router.get("/surveys", surveysController.show)
router.post("/surveys", surveysController.create)

router.post("/sendMail", sendMailController.execute)

router.get("/answers/:value", answerController.execute)

router.get("/nps/:survey_id", npsContrroler.execute)

export { router }