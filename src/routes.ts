import { Router } from "express";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { AuthUserController } from "./useCases/authUser/AuthUserController";
import { CreateStudentController } from "./useCases/createStudent/CreateStudentController";
import { CreateNeighborhoodController } from "./useCases/createNeighborhood/CreateNeighborhoodController";
import { ensureAuth } from "./middlewares/ensureAuth";

const router = Router()

const createUserController = new CreateUserController()

const createStudentController = new CreateStudentController()

const createNeighborhoodController = new CreateNeighborhoodController()

const authUserController = new AuthUserController()


router.post('/user', createUserController.handle)

router.post('/login', authUserController.handle)

router.post('/student', createStudentController.handle)

router.post('/neighborhood', ensureAuth, createNeighborhoodController.handle)

router.get('/neighborhoods', ensureAuth, (request, response) => {
    return response.json([
        { id: 1, name: 'aaa' },
        { id: 1, name: 'aaa' },
        { id: 1, name: 'aaa' },
        { id: 1, name: 'aaa' },
    ])
})

export { router }