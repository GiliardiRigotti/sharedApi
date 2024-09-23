import { client } from "../../prisma/client";

interface IRequest {
	id: number;
}
class GetListMilitantsByCandidateIdUseCase {
	async execute({ id }: IRequest) {
		const militants = await client.militant.findMany({
			where: {
				candidateId: id,
			},
		});

		return militants;
	}
}

export { GetListMilitantsByCandidateIdUseCase };
