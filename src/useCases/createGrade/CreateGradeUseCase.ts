import { client } from "../../prisma/client"

interface IGradeRequest {
    name: string
}


class CreateGradeUseCase {
    async execute({ name }: IGradeRequest) {
        const gradeAlreadyExists = await client.grade.findFirst({
            where: {
                name
            }
        })

        if (gradeAlreadyExists) {
            throw new Error("Grade already exists!")
        }

        const grade = await client.grade.create({
            data: {
                name,
            }
        })

        return grade
    }
}

export { CreateGradeUseCase }