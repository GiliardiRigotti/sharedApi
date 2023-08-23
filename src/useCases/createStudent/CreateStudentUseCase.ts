import { hash } from "bcryptjs"
import { client } from "../../prisma/client"

interface IStudentRequest {
    name: string
    birthdate: string
    addressId: number
    addressNumber: number
    addressRef?: string
    neighborhoodId: number
    classId: number
    shiftId: number
}

class CreateStudentUseCase {
    async execute({ name, birthdate, neighborhoodId, addressId, shiftId, classId, addressNumber, addressRef }: IStudentRequest) {


        const user = await client.student.create({
            data: {
                name,
                birthdate,
                addressId,
                addressNumber,
                addressRef,
                classId,
                shiftId,
                neighborhoodId,
            }
        })

        return user
    }
}

export { CreateStudentUseCase }