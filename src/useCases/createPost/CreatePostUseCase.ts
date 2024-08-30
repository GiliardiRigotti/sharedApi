import { client } from "../../prisma/client";

interface IRequest {
	image: string;
	description?: string;
	title?: string;
	userId: number;
}

class CreatePostUseCase {
	async execute({ image, userId, description, title }: IRequest) {
		const shift = await client.post.create({
			data: {
				image,
				description,
				title,
				userId,
			},
		});

		return shift;
	}
}

export { CreatePostUseCase };
