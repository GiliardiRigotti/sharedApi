import { compare } from "bcryptjs";
import { client } from "../../prisma/client";
import { sign } from "jsonwebtoken";
import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken";

interface IRequest {
	phone: string;
	password: string;
}
class AuthUserUseCase {
	async execute({ phone, password }: IRequest) {
		const userAlreadyExists = await client.user.findFirst({
			where: { phone },
		});

		if (!userAlreadyExists) {
			throw new Error("User or password incorrect");
		}

		const passwordMatch = await compare(password, userAlreadyExists.password);

		if (!passwordMatch) {
			throw new Error("User or password incorrect");
		}

		const token = sign({}, "c2a0d19c-8918-4044-aa50-9f9e90aadf84", {
			subject: userAlreadyExists.id.toString(),
			expiresIn: "24h",
		});

		const generateRefreshToken = new GenerateRefreshToken();
		const refreshToken = await generateRefreshToken.execute(
			userAlreadyExists.id,
		);
		const { id, name } = userAlreadyExists;
		return {
			token,
			refreshToken,
			userId: id,
			name,
		};
	}
}

export { AuthUserUseCase };
