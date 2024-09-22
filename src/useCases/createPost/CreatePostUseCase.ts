import { client } from "../../prisma/client";

interface IRequest {
	filename: string;
	fileType: string;
	description?: string;
	title?: string;
	candidateId: number;
}

class CreatePostUseCase {
	async execute({
		filename,
		fileType,
		candidateId,
		description,
		title,
	}: IRequest) {
		const post = await client.post.create({
			data: {
				filename,
				fileType,
				description,
				title,
				candidateId,
			},
		});

		return post;
	}
}

export { CreatePostUseCase };
