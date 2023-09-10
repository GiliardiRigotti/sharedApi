import { client } from "../../prisma/client"

interface IShiftRequest {
    name: string
}


class CreateShiftUseCase {
    async execute({ name }: IShiftRequest) {
        const shiftAlreadyExists = await client.shift.findFirst({
            where: {
                name
            }
        })

        if (shiftAlreadyExists) {
            throw new Error("Shift already exists!")
        }

        const shift = await client.shift.create({
            data: {
                name,
            }
        })

        return shift
    }
}

export { CreateShiftUseCase }