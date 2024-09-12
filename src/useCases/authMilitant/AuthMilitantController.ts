import type { Request, Response } from "express";
import { AuthMilitantUseCase } from "./AuthMilitantUseCase";

class AuthMilitantController {
	async handle(request: Request, response: Response) {
		const { phone, codeAccess } = request.body;

		const authMilitantUseCase = new AuthMilitantUseCase();

		const token = await authMilitantUseCase.execute({ phone, codeAccess });

		return response.json(token);
	}
}

export { AuthMilitantController };
