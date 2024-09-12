import type { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

class DeletePostController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		console.log("Delete", id);
		const deletePostUseCase = new DeletePostUseCase();

		const posts = await deletePostUseCase.execute({ id });

		return response.json(posts);
	}
}

export { DeletePostController };
