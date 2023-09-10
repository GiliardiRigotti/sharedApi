import { Request, Response } from "express";
import { CreateGradeUseCase } from "./CreateGradeUseCase";

class CreateGradeController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const createAddressUseCase = new CreateGradeUseCase()

        const grade = await createAddressUseCase.execute({ name })

        return response.json(grade)
    }
}

export { CreateGradeController }