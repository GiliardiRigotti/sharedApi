import { hash } from "bcryptjs"
import { client } from "../../prisma/client"

interface IStudentRequest {
    name: string
    birthdate: string
    addressId: number
    addressNumber: number
    addressRef?: string
    neighborhoodId: number
    gradeId: number
    shiftId: number
}

class CreateStudentUseCase {
    async execute({ name, birthdate, neighborhoodId, addressId, shiftId, gradeId, addressNumber, addressRef }: IStudentRequest) {


        const user = await client.student.create({
            data: {
                name,
                birthdate,
                addressId,
                addressNumber,
                addressRef,
                gradeId,
                shiftId,
                neighborhoodId,
            }
        })

        return user
    }
}

export { CreateStudentUseCase }