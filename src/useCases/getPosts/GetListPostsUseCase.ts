import { client } from "../../prisma/client";

class GetListPostsUseCase {
	async execute() {
		const posts = await client.post.findMany();

		return posts;
	}
}

export { GetListPostsUseCase };
