import { compare } from "bcryptjs";
import { client } from "../../prisma/client";
import { sign } from "jsonwebtoken";
import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken";

interface IRequest {
	phone: string;
	codeAccess: string;
}
class AuthMilitantUseCase {
	async execute({ phone, codeAccess }: IRequest) {
		const militantAlreadyExists = await client.militant.findFirst({
			where: { phone },
		});

		if (!militantAlreadyExists) {
			throw new Error("Phone or code access incorrect");
		}

		const passwordMatch = codeAccess === militantAlreadyExists.codeAccess;

		if (!passwordMatch) {
			throw new Error("Phone or code access incorrect");
		}

		const token = sign({}, "c2a0d19c-8918-4044-aa50-9f9e90aadf84", {
			subject: militantAlreadyExists.id.toString(),
			expiresIn: "1h",
		});
		return { token, ...militantAlreadyExists };
	}
}

export { AuthMilitantUseCase };
