import type { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
	async handle(request: Request, response: Response) {
		const {
			cpf,
			name,
			password,
			flag,
			nameCandidate,
			numberCandidate,
			phone,
			avatarCandidate,
		} = request.body;

		const createUserUseCase = new CreateUserUseCase();

		const user = await createUserUseCase.execute({
			name,
			cpf,
			password,
			flag,
			nameCandidate,
			numberCandidate,
			avatarCandidate,
			phone,
		});

		return response.json(user);
	}
}

export { CreateUserController };
