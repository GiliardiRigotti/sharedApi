import { client } from "../../prisma/client"


class GetListStudentsMobileUseCase {
    async execute() {

        const students = await client.student.findMany({
            select: {
                id: true,
                name: true,
                neighborhood: {
                    select: {
                        name: true,
                    }
                },
                address: {
                    select: {
                        name: true,
                    }
                },
                grade: {
                    select: {
                        name: true,
                    }
                },
                shift: {
                    select: {
                        name: true,
                    }
                }
            }
        })


        return students
    }
}

export { GetListStudentsMobileUseCase }