import { Request, Response } from "express";
import { GetListShiftsUseCase } from "./GetListShiftsUseCase";

class GetListShiftsController {
    async handle(request: Request, response: Response) {

        const getListShiftsUseCase = new GetListShiftsUseCase()

        const shifts = await getListShiftsUseCase.execute()

        return response.json(shifts)
    }
}

export { GetListShiftsController }