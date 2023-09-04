import { client } from "../../prisma/client"


class GetListNeighborhoodsUseCase {
    async execute() {

        const neighborhoods = await client.neighborhood.findMany()

        return neighborhoods
    }
}

export { GetListNeighborhoodsUseCase }