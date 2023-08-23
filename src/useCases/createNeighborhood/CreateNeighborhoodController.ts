import { Request, Response } from "express";
import { CreateNeighborhoodUseCase } from "./CreateNeighborhoodUseCase";

class CreateNeighborhoodController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const createNeighborhoodUseCase = new CreateNeighborhoodUseCase()

        const user = await createNeighborhoodUseCase.execute({ name })

        return response.json(user)
    }
}

export { CreateNeighborhoodController }