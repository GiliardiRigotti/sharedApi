import type { Request, Response } from "express";
import { CreateCandidateUseCase } from "./CreateCandidateUseCase";

class CreateCandidateController {
	async handle(request: Request, response: Response) {
		const { userId, numberCandidate, nameCandidate, avatarCandidate } =
			request.body;

		const createCandidateUseCase = new CreateCandidateUseCase();

		const candidate = await createCandidateUseCase.execute({
			userId,
			numberCandidate,
			nameCandidate,
			avatarCandidate,
		});

		return response.json(candidate.id);
	}
}

export { CreateCandidateController };
