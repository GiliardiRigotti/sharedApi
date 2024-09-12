import type { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const getUserUseCase = new GetUserUseCase();

		const user = await getUserUseCase.execute({ id });

		return response.json(user);
	}
}

export { GetUserController };
