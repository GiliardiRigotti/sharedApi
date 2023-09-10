import { Request, Response } from "express";
import { CreateShiftUseCase } from "./CreateShiftUseCase";

class CreateShiftController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const createShiftUseCase = new CreateShiftUseCase()

        const shift = await createShiftUseCase.execute({ name })

        return response.json(shift)
    }
}

export { CreateShiftController }