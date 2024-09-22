import { hash } from "bcryptjs";
import { client } from "../../prisma/client";

interface IMilitantRequest {
	nameCandidate: string;
	numberCandidate: string;
	avatarCandidate: string;
	userId: number;
}

class CreateCandidateUseCase {
	async execute({
		userId,
		numberCandidate,
		nameCandidate,
		avatarCandidate,
	}: IMilitantRequest) {
		const user = await client.candidate.create({
			data: {
				userId,
				numberCandidate,
				nameCandidate,
				avatarCandidate,
			},
		});

		return user;
	}
}

export { CreateCandidateUseCase };
