import type { Request, Response } from "express";
import { CreateMilitantUseCase } from "./CreateMilitantUseCase";

class CreateMilitantController {
	async handle(request: Request, response: Response) {
		const { name, phone, codeAccess, userId } = request.body;

		const createMilitantUseCase = new CreateMilitantUseCase();

		const militant = await createMilitantUseCase.execute({
			name,
			codeAccess,
			phone,
			userId,
		});

		return response.json(militant.id);
	}
}

export { CreateMilitantController };
