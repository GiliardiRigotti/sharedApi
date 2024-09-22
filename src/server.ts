import "express-async-errors";
import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/images", express.static("uploads"));

app.use(router);

app.use(
	(error: Error, request: Request, response: Response, next: NextFunction) => {
		return response.status(400).json({
			status: "Error",
			message: error.message,
		});
	},
);

app.listen(21168, () => console.log("Server is running on port 21168"));
