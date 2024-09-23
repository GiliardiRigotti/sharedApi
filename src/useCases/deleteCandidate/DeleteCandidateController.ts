import type { Request, Response } from "express";
import { DeleteCandidateUseCase } from "./DeleteCandidateUseCase";

class DeleteCandidateController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const deleteCandidateUseCase = new DeleteCandidateUseCase();

		const militant = await deleteCandidateUseCase.execute({ id });

		return response.json(militant);
	}
}

export { DeleteCandidateController };
