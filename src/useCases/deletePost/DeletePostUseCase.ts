import { client } from "../../prisma/client";

interface IRequest {
	id: number;
}

class DeletePostUseCase {
	async execute({ id }: IRequest) {
		const post = await client.post.delete({
			where: { id },
		});

		return post;
	}
}

export { DeletePostUseCase };
