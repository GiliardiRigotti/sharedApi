import { client } from "../../prisma/client";

interface IRequest {
	candidateId: number;
}
class GetListPostsUseCase {
	async execute({ candidateId }: IRequest) {
		const posts = await client.post.findMany({
			where: { candidateId },
		});

		return posts;
	}
}

export { GetListPostsUseCase };
