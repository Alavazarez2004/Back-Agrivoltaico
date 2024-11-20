//Use Cases
import { CreateUserUseCase } from "../application/use-cases/createUserUseCase";
import { GetUserByIdUseCase } from "../application/use-cases/getUserByIdUseCase";
import { GetUserByUsernameUseCase } from "../application/use-cases/getUserByUsernameUseCase";
import { GetUserByEmailUseCase } from "../application/use-cases/getUserByEmailUseCase";
import { UpdateUserUseCase } from "../application/use-cases/updateUserUseCase";
import { DeleteUserUseCase } from "../application/use-cases/deleteUserUseCase";

//Controllers
import { CreateUserController } from "../adapters/controllers/createUserController";
import { DeleteUserController } from "../adapters/controllers/deleteUserController";
import { GetUserByIdController } from "../adapters/controllers/getUserByIdController";
import { GetUserByUsernameController } from "../adapters/controllers/getUserByUsernameController";
import { GetUserByEmailController } from "../adapters/controllers/getUserByEmailController";
import { UpdateUserController } from "../adapters/controllers/updateUserController";

//Repositories
import { MySqlUserRepository } from "./repositories/MySqlUserRepository";

export const MySqlUserRepositoryInstance = new MySqlUserRepository();

export const createUserUseCase = new CreateUserUseCase(MySqlUserRepositoryInstance);
export const getUserByIdUseCase = new GetUserByIdUseCase(MySqlUserRepositoryInstance);
export const getUserByUsernameUseCase = new GetUserByUsernameUseCase(MySqlUserRepositoryInstance);
export const getUserByEmailUseCase = new GetUserByEmailUseCase(MySqlUserRepositoryInstance);
export const updateUserUseCase = new UpdateUserUseCase(MySqlUserRepositoryInstance);
export const deleteUserUseCase = new DeleteUserUseCase(MySqlUserRepositoryInstance);

export const createUserController = new CreateUserController(createUserUseCase);
export const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);
export const getUserByUsernameController = new GetUserByUsernameController(getUserByUsernameUseCase);
export const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase);
export const updateUserController = new UpdateUserController(updateUserUseCase);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);