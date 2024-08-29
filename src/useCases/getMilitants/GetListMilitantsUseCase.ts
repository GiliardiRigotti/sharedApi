import { client } from "../../prisma/client";

class GetListMilitantsUseCase {
	async execute() {
		const militants = await client.militant.findMany();

		return militants;
	}
}

export { GetListMilitantsUseCase };
