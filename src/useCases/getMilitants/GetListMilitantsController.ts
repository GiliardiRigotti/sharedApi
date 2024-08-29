import type { Request, Response } from "express";
import { GetListMilitantsUseCase } from "./GetListMilitantsUseCase";

class GetListMilitantsController {
	async handle(request: Request, response: Response) {
		const getListMilitantsUseCase = new GetListMilitantsUseCase();

		const students = await getListMilitantsUseCase.execute();

		return response.json(students);
	}
}

export { GetListMilitantsController };
