import { client } from "../../prisma/client"


class GetListGradesUseCase {
    async execute() {

        const grades = await client.grade.findMany()

        return grades
    }
}

export { GetListGradesUseCase }