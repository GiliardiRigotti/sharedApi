import { client } from "../../prisma/client";

interface IRequest {
	id: number;
}

class DeleteCandidateUseCase {
	async execute({ id }: IRequest) {
		const militant = await client.candidate.delete({
			where: { id },
		});

		return militant;
	}
}

export { DeleteCandidateUseCase };
