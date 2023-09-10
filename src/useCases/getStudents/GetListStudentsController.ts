import { Request, Response } from "express";
import { GetListStudentsUseCase } from "./GetListStudentsUseCase";

class GetListStudentsController {
    async handle(request: Request, response: Response) {

        const getListStudentsUseCase = new GetListStudentsUseCase()

        const students = await getListStudentsUseCase.execute()

        return response.json(students)
    }
}

export { GetListStudentsController }