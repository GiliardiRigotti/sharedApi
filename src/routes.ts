import { Router } from "express";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { AuthUserController } from "./useCases/authUser/AuthUserController";
import { CreateStudentController } from "./useCases/createStudent/CreateStudentController";
import { CreateNeighborhoodController } from "./useCases/createNeighborhood/CreateNeighborhoodController";
import { ensureAuth } from "./middlewares/ensureAuth";
import { GetListNeighborhoodsController } from "./useCases/getNeighborhood/GetListNeighborhoodController";
import { GetListShiftsController } from "./useCases/getShift/GetListShiftsController";
import { CreateAddressController } from "./useCases/createAddress/CreateAddressController";
import { GetListAddressController } from "./useCases/getAddress/GetListAddressController";
import { CreateGradeController } from "./useCases/createGrade/CreateGradeController";
import { GetListGradesController } from "./useCases/getGrade/GetListGradesController";
import { CreateShiftController } from "./useCases/createShift/CreateShiftController";
import { GetListStudentsController } from "./useCases/getStudents/GetListStudentsController";
import { GetListStudentsMobileController } from "./useCases/getStudents/GetListStudentsMobileController";

const router = Router()

const authUserController = new AuthUserController()

const createUserController = new CreateUserController()

const createStudentController = new CreateStudentController()

const getListStudentsController = new GetListStudentsController()

const createNeighborhoodController = new CreateNeighborhoodController()

const getListNeighborhoodsController = new GetListNeighborhoodsController()

const createAddressController = new CreateAddressController()

const getListAddressController = new GetListAddressController()

const createGradeController = new CreateGradeController()

const getListGradesController = new GetListGradesController()

const createShiftController = new CreateShiftController()

const getListShiftsController = new GetListShiftsController()

const getListStudentsMobileController = new GetListStudentsMobileController()

router.post('/user', createUserController.handle)

router.post('/login', authUserController.handle)

router.post('/student', ensureAuth, createStudentController.handle)

router.get('/students', ensureAuth, getListStudentsController.handle)

router.get('/listStudents', ensureAuth, getListStudentsMobileController.handle)

router.post('/neighborhood', ensureAuth, createNeighborhoodController.handle)

router.get('/neighborhoods', ensureAuth, getListNeighborhoodsController.handle)

router.post('/address', ensureAuth, createAddressController.handle)

router.get('/address', ensureAuth, getListAddressController.handle)

router.post('/grade', ensureAuth, createGradeController.handle)

router.get('/grades', ensureAuth, getListGradesController.handle)

router.post('/shift', ensureAuth, createShiftController.handle)

router.get('/shifts', ensureAuth, getListShiftsController.handle)



export { router }