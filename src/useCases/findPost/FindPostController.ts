import type { Request, Response } from "express";
import { FindPostUseCase } from "./FindPostUseCase";

class FindPostController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const findPostUseCase = new FindPostUseCase();

		const post = await findPostUseCase.execute({ id });

		return response.json(post);
	}
}

export { FindPostController };
