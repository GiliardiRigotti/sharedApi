import { client } from "../../prisma/client"

interface IAddressRequest {
    name: string
}


class GetListAddressUseCase {
    async execute() {
        const address = await client.address.findMany()

        return address
    }
}

export { GetListAddressUseCase }