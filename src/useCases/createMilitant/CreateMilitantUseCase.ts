import { hash } from "bcryptjs";
import { client } from "../../prisma/client";

interface IMilitantRequest {
	name: string;
	phone: string;
	codeAccess: string;
	candidateId: number;
}

class CreateMilitantUseCase {
	async execute({ name, codeAccess, phone, candidateId }: IMilitantRequest) {
		const user = await client.militant.create({
			data: {
				name,
				codeAccess,
				phone,
				candidateId,
			},
		});

		return user;
	}
}

export { CreateMilitantUseCase };
