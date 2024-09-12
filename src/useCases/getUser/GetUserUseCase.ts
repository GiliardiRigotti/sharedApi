import { client } from "../../prisma/client";

interface IRequest {
	id: number;
}

class GetUserUseCase {
	async execute({ id }: IRequest) {
		const user = await client.user.findFirst({
			where: { id },
		});

		return {
			nameCandidate: user.nameCandidate,
			avatarCandidate: user.avatarCandidate,
			numberCandidate: user.numberCandidate,
		};
	}
}

export { GetUserUseCase };
