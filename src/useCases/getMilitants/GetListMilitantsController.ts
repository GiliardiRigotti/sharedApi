import type { Request, Response } from "express";
import { GetListMilitantsUseCase } from "./GetListMilitantsUseCase";

class GetListMilitantsController {
	async handle(request: Request, response: Response) {
		const id = Number.parseInt(request.params.id);
		const getListMilitantsUseCase = new GetListMilitantsUseCase();

		const militants = await getListMilitantsUseCase.execute({ id });

		return response.json(militants);
	}
}

export { GetListMilitantsController };
