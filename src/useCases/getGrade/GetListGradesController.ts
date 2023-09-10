import { Request, Response } from "express";
import { GetListGradesUseCase } from "./GetListGradesUseCase";

class GetListGradesController {
    async handle(request: Request, response: Response) {

        const getListNeighborhoodsUseCase = new GetListGradesUseCase()

        const grades = await getListNeighborhoodsUseCase.execute()

        return response.json(grades)
    }
}

export { GetListGradesController }