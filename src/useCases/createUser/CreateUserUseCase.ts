import { hash } from "bcryptjs";
import { client } from "../../prisma/client";

interface IUserRequest {
	name: string;
	password: string;
	cpf: string;
	flag: string;
	phone: string;
}

class CreateUserUseCase {
	async execute({ name, cpf, password, flag, phone }: IUserRequest) {
		const userAlreadyExists = await client.user.findFirst({
			where: {
				cpf,
			},
		});

		if (userAlreadyExists) {
			throw new Error("User already exists!");
		}

		const passwordHash = await hash(password, 8);

		const user = await client.user.create({
			data: {
				name,
				cpf,
				password: passwordHash,
				flag,
				phone,
			},
		});

		return user;
	}
}

export { CreateUserUseCase };
