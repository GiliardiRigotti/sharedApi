import { Request, Response } from "express";
import { CreateAddressUseCase } from "./GetAddressUseCase";

class CreateAddressController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const createAddressUseCase = new CreateAddressUseCase()

        const address = await createAddressUseCase.execute({ name })

        return response.json(address)
    }
}

export { CreateAddressController } 