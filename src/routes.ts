import { Router } from "express";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { AuthUserController } from "./useCases/authUser/AuthUserController";
import { CreateStudentController } from "./useCases/createStudent/CreateStudentController";

const router = Router()

const createUserController = new CreateUserController()

const createStudentController = new CreateStudentController()

const authUserController = new AuthUserController()


router.post('/users', createUserController.handle)

router.post('/login', authUserController.handle)

router.post('/students', createStudentController.handle)

export { router }