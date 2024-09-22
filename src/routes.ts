import { Router } from "express";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { AuthUserController } from "./useCases/authUser/AuthUserController";
import { CreateMilitantController } from "./useCases/createMilitant/CreateMilitantController";
import { ensureAuth } from "./middlewares/ensureAuth";
import { GetListMilitantsController } from "./useCases/getMilitants/GetListMilitantsController";
import multer from "multer";
import { storage } from "./config/multerConfig";
import { CreatePostController } from "./useCases/createPost/CreatePostController";
import { GetListPostsController } from "./useCases/getPosts/GetListPostsController";
import { AuthMilitantController } from "./useCases/authMilitant/AuthMilitantController";
import { DeletePostController } from "./useCases/deletePost/DeletePostController";
import { FindPostController } from "./useCases/findPost/FindPostController";
import { GetUserController } from "./useCases/getUser/GetUserController";
import { GetListSharedPostsController } from "./useCases/getSharedPosts /GetListSharedPostsController";
import { CreateSharedPostController } from "./useCases/createSharedPost/CreateSharedPostController";
import { DeleteMilitantController } from "./useCases/deleteMilitant/DeleteMilitantController";
import { CreateCandidateController } from "./useCases/createCandidate/CreateCandidateController";
import { DeleteCandidateController } from "./useCases/deleteCandidate/DeleteCandidateController";

const upload = multer({ storage: storage });

const router = Router();

const authUserController = new AuthUserController();

const authMilitantCongtroller = new AuthMilitantController();

const createUserController = new CreateUserController();

const createCandidateController = new CreateCandidateController();

const getCandidatesController = new CreateCandidateController();

const deleteCandidateController = new DeleteCandidateController();

const createSharedPostController = new CreateSharedPostController();

const getListSharedPostsController = new GetListSharedPostsController();

const getUserController = new GetUserController();

const createMilitantController = new CreateMilitantController();

const createPostController = new CreatePostController();

const getListPostsController = new GetListPostsController();

const findPostController = new FindPostController();

const deletePostController = new DeletePostController();

const getListMilitansController = new GetListMilitantsController();

const deleteMilitantController = new DeleteMilitantController();

router.post("/user", createUserController.handle);

router.post("/candidate", ensureAuth, createCandidateController.handle);

router.get("/candidates", ensureAuth, getCandidatesController.handle);

router.delete("/candidate/:id", ensureAuth, deleteCandidateController.handle);

router.post("/upload", upload.single("file"), (req, res) => {
	return res.json(req.file.filename);
});

router.post("/authUser", authUserController.handle);

router.post("/authMilitant", authMilitantCongtroller.handle);

router.post("/militant", ensureAuth, createMilitantController.handle);

router.post("/post", ensureAuth, createPostController.handle);

router.post("/sharedPost", ensureAuth, createSharedPostController.handle);

router.get("/post/:id", ensureAuth, findPostController.handle);

router.delete("/post/:id", ensureAuth, deletePostController.handle);

router.get("/posts/:id", ensureAuth, getListPostsController.handle);

router.get("/sharedPosts/:id", ensureAuth, getListSharedPostsController.handle);

router.get("/militants/:id", ensureAuth, getListMilitansController.handle);

router.delete("/militant/:id", ensureAuth, deleteMilitantController.handle);

router.get("/user/:id", ensureAuth, getUserController.handle);

export { router };
