import type { Request, Response } from "express";
import { GetListMilitantsMobileUseCase } from "./GetListMilitantsMobileUseCase";

class GetListMilitantsMobileController {
	async handle(request: Request, response: Response) {
		const getListMilitantsMobileUseCase = new GetListMilitantsMobileUseCase();

		const listStudents = await getListMilitantsMobileUseCase.execute();

		return response.json(listStudents);
	}
}

export { GetListMilitantsMobileController };
