import type { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

class AuthUserController {
	async handle(request: Request, response: Response) {
		const { phone, password } = request.body;

		const authUserUseCase = new AuthUserUseCase();

		const token = await authUserUseCase.execute({ phone, password });

		return response.json(token);
	}
}

export { AuthUserController };
