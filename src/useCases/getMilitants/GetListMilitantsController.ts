import type { Request, Response } from "express";
import { GetListMilitantsUseCase } from "./GetListMilitantsUseCase";

class GetListMilitantsController {
	async handle(request: Request, response: Response) {
		const getListMilitantsUseCase = new GetListMilitantsUseCase();

		const militants = await getListMilitantsUseCase.execute();

		return response.json(militants);
	}
}

export { GetListMilitantsController };
