import { client } from "../../prisma/client";

interface IRequest {
	id: number;
}

class DeleteCandidateUseCase {
	async execute({ id }: IRequest) {
		const candidate = await client.candidate.delete({
			where: { id },
		});

		return candidate;
	}
}

export { DeleteCandidateUseCase };
