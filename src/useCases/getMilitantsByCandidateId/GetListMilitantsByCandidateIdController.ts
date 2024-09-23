import type { Request, Response } from "express";
import { GetListMilitantsByCandidateIdUseCase } from "./GetListMilitantsByCandidateIdUseCase";

class GetListMilitantsByCandidateIdController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const getListMilitantsByCandidateIdUseCase =
			new GetListMilitantsByCandidateIdUseCase();

		const militants = await getListMilitantsByCandidateIdUseCase.execute({
			id,
		});

		return response.json(militants);
	}
}

export { GetListMilitantsByCandidateIdController };
