import { Router } from "express";
import { ensureAuth } from "./middlewares/ensureAuth";
import multer from "multer";
import { storage } from "./config/multerConfig";
import { AuthUserController } from "./useCases/authUser/AuthUserController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { GetUserController } from "./useCases/getUser/GetUserController";


const upload = multer({ storage: storage });

const router = Router();

const authUserController = new AuthUserController();

const createUserController = new CreateUserController();

const getUserController = new GetUserController();

router.get("/", (req, res) => {
	res.json({ teste: "oi" });
});

router.post("/user", createUserController.handle);

router.post("/upload", upload.single("file"), (req, res) => {
	return res.json(req.file.filename);
});

router.post("/authUser", authUserController.handle);

router.get("/user/:id", ensureAuth, getUserController.handle);

export { router };
