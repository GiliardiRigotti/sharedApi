import { Request, Response } from "express";
import { GetListNeighborhoodsUseCase } from "./GetListNeighborhoodsUseCase";

class GetListNeighborhoodsController {
    async handle(request: Request, response: Response) {

        const getListNeighborhoodsUseCase = new GetListNeighborhoodsUseCase()

        const neighborhoods = await getListNeighborhoodsUseCase.execute()

        return response.json(neighborhoods)
    }
}

export { GetListNeighborhoodsController }