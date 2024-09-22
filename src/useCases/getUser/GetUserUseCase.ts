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
			user,
		};
	}
}

export { GetUserUseCase };
