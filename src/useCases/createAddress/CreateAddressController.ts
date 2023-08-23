import { Request, Response } from "express";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const createAddressUseCase = new CreateAddressUseCase()

        const user = await createAddressUseCase.execute({ name })

        return response.json(user)
    }
}

export { CreateAddressController }