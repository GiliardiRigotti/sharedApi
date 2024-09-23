import { client } from "../../prisma/client";

interface IRequest {
	userId: number;
}

class GetCandidatesUseCase {
	async execute({ userId }: IRequest) {
		const candidates = await client.candidate.findMany({
			where: { userId },
		});

		return candidates;
	}
}

export { GetCandidatesUseCase };
