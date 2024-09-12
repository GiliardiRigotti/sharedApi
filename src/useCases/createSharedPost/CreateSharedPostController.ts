import type { Request, Response } from "express";
import { CreateSharedPostUseCase } from "./CreateSharedPostUseCase";

class CreateSharedPostController {
	async handle(request: Request, response: Response) {
		const { postId, militantId } = request.body;

		const createSharedPostUseCase = new CreateSharedPostUseCase();

		const sharedPost = await createSharedPostUseCase.execute({
			militantId,
			postId,
		});

		return response.json(sharedPost);
	}
}

export { CreateSharedPostController };
