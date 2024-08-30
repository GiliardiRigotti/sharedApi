import type { Request, Response } from "express";
import { GetListPostsUseCase } from "./GetListPostsUseCase";

class GetListPostsController {
	async handle(request: Request, response: Response) {
		const getListPotsUseCase = new GetListPostsUseCase();

		const posts = await getListPotsUseCase.execute();

		return response.json(posts);
	}
}

export { GetListPostsController };
