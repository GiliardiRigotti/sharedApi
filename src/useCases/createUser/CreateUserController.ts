import { Request, Response } from "express";
import { CreateUserUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { cpf, name, password, flag } = request.body

        const createUserUseCase = new CreateUserUserUseCase()

        const user = await createUserUseCase.execute({ name, cpf, password, flag })

        return response.json(user)
    }
}

export { CreateUserController }