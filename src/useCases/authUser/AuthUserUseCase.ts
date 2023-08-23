import { compare } from "bcryptjs"
import { client } from "../../prisma/client"
import { sign } from "jsonwebtoken"

interface IRequest {
    cpf: string
    password: string
}
class AuthUserUseCase {
    async execute({ cpf, password }: IRequest) {
        const userAlreadyExists = await client.user.findFirst({
            where: { cpf }
        })

        if (!userAlreadyExists) {
            throw new Error('User or password incorrect')
        }

        const passwordMatch = await compare(password, userAlreadyExists.password)

        if (!passwordMatch) {
            throw new Error('User or password incorrect')
        }

        const token = sign({}, 'c2a0d19c-8918-4044-aa50-9f9e90aadf84', {
            subject: userAlreadyExists.id.toString(),
            expiresIn: '20s'
        })
        return { token }
    }
}

export { AuthUserUseCase }