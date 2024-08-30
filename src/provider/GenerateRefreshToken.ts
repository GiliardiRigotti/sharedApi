import { client } from "../prisma/client";
import dayjs from "dayjs";

class GenerateRefreshToken {
	async execute(userId: number) {
		const expiresIn = dayjs().add(15, "seconds").unix();
		const generateRefreshToken = await client.refreshToken.create({
			data: {
				userId,
				expiresIn,
			},
		});
		return generateRefreshToken;
	}
}

export { GenerateRefreshToken };
