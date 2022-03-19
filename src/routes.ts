import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

// cadastro
router.post("/users", createUserController.handle);
// autenticação
router.post("/login", authenticateUserController.handle);
// cursos para teste
router.get("/courses", ensureAuthenticated, (request, response) => {
  return response.json([
    { id: 1, name: "Nodejs" },
    { id: 2, name: "Reactjs" },
    { id: 3, name: "React Native" },
    { id: 4, name: "Flutter" },
    { id: 5, name: "Elixir" },
  ]);
});

export { router };
