import { client } from "../../prisma/client";

interface IRequest {
	postId: number;
}
class GetListSharedPostsUseCase {
	async execute({ postId }: IRequest) {
		const sharedPosts = await client.sharedPost.findMany({
			where: { postId },
		});

		return sharedPosts;
	}
}

export { GetListSharedPostsUseCase };
