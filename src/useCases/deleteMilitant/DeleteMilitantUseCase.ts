import { client } from "../../prisma/client";

interface IRequest {
	id: number;
}

class DeleteMilitantUseCase {
	async execute({ id }: IRequest) {
		const militant = await client.militant.delete({
			where: { id },
		});

		return militant;
	}
}

export { DeleteMilitantUseCase };
