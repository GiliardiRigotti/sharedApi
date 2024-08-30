import type { Request, Response } from "express";
import { AuthMilitantUseCase } from "./AuthMilitantUseCase";

class AuthUserController {
	async handle(request: Request, response: Response) {
		const { cpf, password } = request.body;

		const authMilitantUseCase = new AuthMilitantUseCase();

		const token = await authMilitantUseCase.execute({ phone, codeAccess });

		return response.json(token);
	}
}

export { AuthUserController };
