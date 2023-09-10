import { Request, Response } from "express";
import { GetListStudentsMobileUseCase } from "./GetListStudentsMobileUseCase";

class GetListStudentsMobileController {
    async handle(request: Request, response: Response) {

        const getListStudentsMobileUseCase = new GetListStudentsMobileUseCase()

        const listStudents = await getListStudentsMobileUseCase.execute()

        return response.json(listStudents)
    }
}

export { GetListStudentsMobileController }