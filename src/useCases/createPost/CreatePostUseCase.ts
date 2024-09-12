import { client } from "../../prisma/client";

interface IRequest {
	filename: string;
	fileType: string;
	description?: string;
	title?: string;
	userId: number;
}

class CreatePostUseCase {
	async execute({ filename, fileType, userId, description, title }: IRequest) {
		const post = await client.post.create({
			data: {
				filename,
				fileType,
				description,
				title,
				userId,
			},
		});

		return post;
	}
}

export { CreatePostUseCase };
