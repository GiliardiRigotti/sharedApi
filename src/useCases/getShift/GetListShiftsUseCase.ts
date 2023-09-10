import { client } from "../../prisma/client"


class GetListShiftsUseCase {
    async execute() {

        const shifts = await client.shift.findMany()

        return shifts
    }
}

export { GetListShiftsUseCase }