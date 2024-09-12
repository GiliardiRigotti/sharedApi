import { client } from "../../prisma/client";

interface IRequest {
	userId: number;
}
class GetListPostsUseCase {
	async execute({ userId }: IRequest) {
		const posts = await client.post.findMany({
			where: { userId },
		});

		return posts;
	}
}

export { GetListPostsUseCase };
