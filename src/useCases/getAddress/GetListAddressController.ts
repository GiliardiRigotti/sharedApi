import { Request, Response } from "express";
import { GetListAddressUseCase } from "./GetListAddressUseCase";

class GetListAddressController {
    async handle(request: Request, response: Response) {
        const { name } = request.body

        const getAddressUseCase = new GetListAddressUseCase()

        const address = await getAddressUseCase.execute()

        return response.json(address)
    }
}

export { GetListAddressController } 