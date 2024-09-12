import { client } from "../../prisma/client";

interface IRequest {
	militantId: number;
	postId: number;
}

class CreateSharedPostUseCase {
	async execute({ postId, militantId }: IRequest) {
		const sharedPost = await client.sharedPost.create({
			data: {
				militantId,
				postId,
			},
		});

		return sharedPost;
	}
}

export { CreateSharedPostUseCase };
