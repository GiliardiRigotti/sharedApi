import { client } from "../../prisma/client";

interface IRequest {
	id: number;
}

class GetCandidatesUseCase {
	async execute({ id }: IRequest) {
		const candidates = await client.candidate.findMany({
			where: { id },
		});

		return candidates;
	}
}

export { GetCandidatesUseCase };
