import type { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
	async handle(request: Request, response: Response) {
		const { filename, fileType, candidateId, description, title } =
			request.body;

		const createPostUseCase = new CreatePostUseCase();

		const post = await createPostUseCase.execute({
			filename,
			fileType,
			candidateId,
			description,
			title,
		});

		return response.json(post);
	}
}

export { CreatePostController };
