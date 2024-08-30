import { Router } from "express";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { AuthUserController } from "./useCases/authUser/AuthUserController";
import { CreateMilitantController } from "./useCases/createMilitant/CreateMilitantController";
import { ensureAuth } from "./middlewares/ensureAuth";
import { GetListMilitantsController } from "./useCases/getMilitants/GetListMilitantsController";
import { GetListMilitantsMobileController } from "./useCases/getMilitants/GetListMilitantsMobileController";
import multer from "multer";
import { storage } from "./config/multerConfig";
import { CreatePostController } from "./useCases/createPost/CreatePostController";
import { GetListPostsController } from "./useCases/getPosts/GetListPostsController";

const upload = multer({ storage: storage });

const router = Router();

const authUserController = new AuthUserController();

const createUserController = new CreateUserController();

const createMilitantController = new CreateMilitantController();

const createPostController = new CreatePostController();

const getListPostsController = new GetListPostsController();

const getListMilitansController = new GetListMilitantsController();

const getListMilitantsMobileController = new GetListMilitantsMobileController();

router.post("/user", createUserController.handle);

router.post("/upload", upload.single("file"), (req, res) => {
	return res.json(req.file.filename);
});

router.post("/auth", authUserController.handle);

router.post("/login", authUserController.handle);

router.post("/militant", ensureAuth, createMilitantController.handle);

router.post("/post", ensureAuth, createPostController.handle);

router.get("/posts", ensureAuth, getListPostsController.handle);

router.get("/militants", ensureAuth, getListMilitansController.handle);

router.get(
	"/listMilitants",
	ensureAuth,
	getListMilitantsMobileController.handle,
);

export { router };
