import { client } from "../../prisma/client";

class GetListMilitantsMobileUseCase {
	async execute() {
		const militants = await client.militant.findMany({
			select: {
				id: true,
				name: true,
				phone: true,
			},
		});

		return militants;
	}
}

export { GetListMilitantsMobileUseCase };
