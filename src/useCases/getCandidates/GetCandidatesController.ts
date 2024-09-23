import type { Request, Response } from "express";
import { GetCandidatesUseCase } from "./GetCandidatesUseCase";

class GetCandidatesController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const getCandidatesUseCase = new GetCandidatesUseCase();
		const user = await getCandidatesUseCase.execute({ userId: id });

		return response.json(user);
	}
}

export { GetCandidatesController };
