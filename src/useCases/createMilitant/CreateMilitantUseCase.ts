import { hash } from "bcryptjs";
import { client } from "../../prisma/client";

interface IMilitantRequest {
	name: string;
	phone: string;
	codeAccess: string;
	candidateId: number;
	userId: number;
}

class CreateMilitantUseCase {
	async execute({
		name,
		codeAccess,
		phone,
		candidateId,
		userId,
	}: IMilitantRequest) {
		const user = await client.militant.create({
			data: {
				name,
				codeAccess,
				phone,
				candidateId,
				userId,
			},
		});

		return user;
	}
}

export { CreateMilitantUseCase };
