import { Router } from "express";
import { ensureAuth } from "./middlewares/ensureAuth";
import multer from "multer";
import { storage } from "./config/multerConfig";


const upload = multer({ storage: storage });

const router = Router();

const authUserController = new AuthUserController();

const authMilitantCongtroller = new AuthMilitantController();

const createUserController = new CreateUserController();

const createCandidateController = new CreateCandidateController();

const getListCandidatesController = new GetCandidatesController();

const createSharedPostController = new CreateSharedPostController();

const getListSharedPostsController = new GetListSharedPostsController();

const getUserController = new GetUserController();

const createMilitantController = new CreateMilitantController();

const getListMilitantsByCandidateIdController =
	new GetListMilitantsByCandidateIdController();

const deleteCandidateController = new DeleteCandidateController();

const createPostController = new CreatePostController();

const getListPostsController = new GetListPostsController();

const findPostController = new FindPostController();

const deletePostController = new DeletePostController();

const getListMilitansController = new GetListMilitantsController();

const deleteMilitantController = new DeleteMilitantController();

router.get("/", (req, res) => {
	res.json({ teste: "oi" });
});

router.post("/user", createUserController.handle);

router.post("/candidate", createCandidateController.handle);

router.get("/candidates/:id", getListCandidatesController.handle);

router.delete("/candidate/:id", deleteCandidateController.handle);

router.get(
	"/militantsByCandidate/:id",
	getListMilitantsByCandidateIdController.handle,
);

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
