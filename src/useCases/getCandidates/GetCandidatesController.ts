import type { Request, Response } from "express";
import { GetCandidatesUseCase } from "./GetCandidatesUseCase";

class GetUserController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const getCandidatesUseCase = new GetCandidatesUseCase();
		const user = await getCandidatesUseCase.execute({ id });

		return response.json(user);
	}
}

export { GetUserController };
