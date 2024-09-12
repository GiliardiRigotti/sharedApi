import { client } from "../../prisma/client";

interface IRequest {
	id: number;
}

class FindPostUseCase {
	async execute({ id }: IRequest) {
		const post = await client.post.findFirst({
			where: { id },
		});

		return post;
	}
}

export { FindPostUseCase };
