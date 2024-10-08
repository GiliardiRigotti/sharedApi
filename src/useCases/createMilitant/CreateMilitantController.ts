import type { Request, Response } from "express";
import { CreateMilitantUseCase } from "./CreateMilitantUseCase";

class CreateMilitantController {
	async handle(request: Request, response: Response) {
		const { name, phone, codeAccess, candidateId, userId } = request.body;

		const createMilitantUseCase = new CreateMilitantUseCase();

		const militant = await createMilitantUseCase.execute({
			name,
			codeAccess,
			phone,
			candidateId,
			userId,
		});

		return response.json(militant.id);
	}
}

export { CreateMilitantController };
