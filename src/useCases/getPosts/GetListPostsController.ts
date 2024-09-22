import type { Request, Response } from "express";
import { GetListPostsUseCase } from "./GetListPostsUseCase";

class GetListPostsController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const getListPotsUseCase = new GetListPostsUseCase();

		const posts = await getListPotsUseCase.execute({ candidateId: id });

		return response.json(posts);
	}
}

export { GetListPostsController };
