import type { Request, Response } from "express";
import { DeleteMilitantUseCase } from "./DeleteMilitantUseCase";

class DeleteMilitantController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const deleteMilitantUseCase = new DeleteMilitantUseCase();

		const militant = await deleteMilitantUseCase.execute({ id });

		return response.json(militant);
	}
}

export { DeleteMilitantController };
