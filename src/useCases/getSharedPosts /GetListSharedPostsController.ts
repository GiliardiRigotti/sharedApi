import type { Request, Response } from "express";

class GetListSharedPostsController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const getListSharedPostsUseCase = new GetListSharedPostsUseCase();

		const posts = await getListSharedPostsUseCase.execute({ postId: id });

		return response.json(posts);
	}
}

export { GetListSharedPostsController };
