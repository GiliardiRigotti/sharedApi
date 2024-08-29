import { hash } from "bcryptjs";
import { client } from "../../prisma/client";

interface IMilitantRequest {
	name: string;
	phone: string;
	codeAccess: string;
	userId: number;
}

class CreateMilitantUseCase {
	async execute({ name, codeAccess, phone, userId }: IMilitantRequest) {
		const user = await client.militant.create({
			data: {
				name,
				codeAccess,
				phone,
				userId,
			},
		});

		return user;
	}
}

export { CreateMilitantUseCase };
