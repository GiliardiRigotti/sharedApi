import { client } from "../../prisma/client"

interface IAddressRequest {
    name: string
}


class CreateAddressUseCase {
    async execute({ name }: IAddressRequest) {
        const addressAlreadyExists = await client.address.findFirst({
            where: {
                name
            }
        })

        if (addressAlreadyExists) {
            throw new Error("Address already exists!")
        }

        const address = await client.address.create({
            data: {
                name,
            }
        })

        return address
    }
}

export { CreateAddressUseCase }