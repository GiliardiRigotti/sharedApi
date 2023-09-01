import { client } from "../../prisma/client"

interface INeighborhoodRequest {
    name: string
}


class CreateNeighborhoodUseCase {
    async execute({ name }: INeighborhoodRequest) {
        const neighborhoodAlreadyExists = await client.neighborhood.findFirst({
            where: {
                name
            }
        })

        if (neighborhoodAlreadyExists) {
            throw new Error("Neighborhood already exists!")
        }

        const neighborhood = await client.neighborhood.create({
            data: {
                name,
            }
        })

        return neighborhood
    }
}

export { CreateNeighborhoodUseCase }