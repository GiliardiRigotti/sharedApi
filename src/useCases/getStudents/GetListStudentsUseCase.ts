import { client } from "../../prisma/client"


class GetListStudentsUseCase {
    async execute() {

        const students = await client.student.findMany()

        return students
    }
}

export { GetListStudentsUseCase }