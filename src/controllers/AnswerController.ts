import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../erros/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController{

    //http://localhost:3333/answers/1?u=81d3eb07-810e-443e-81e1-f542f2c4f736
    async execute(request: Request, response: Response){
        const { value } = request.params;
        const { su } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(su)
        });

        if(!surveyUser){
            throw new AppError("Survey User does not exists!")
        };

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }

}

export { AnswerController };

