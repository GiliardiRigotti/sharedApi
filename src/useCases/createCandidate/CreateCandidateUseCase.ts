import { hash } from "bcryptjs";
import { client } from "../../prisma/client";

interface ICandidateRequest {
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
	}: ICandidateRequest) {
		const candidate = await client.candidate.create({
			data: {
				userId,
				numberCandidate,
				nameCandidate,
				avatarCandidate,
			},
		});

		return candidate;
	}
}

export { CreateCandidateUseCase };
