import { Router } from "express";

import { createUserController } from "../../infrastructure/UserDependencies";
import { getUserByIdController } from "../../infrastructure/UserDependencies";
import { getUserByUsernameController } from "../../infrastructure/UserDependencies";
import { getUserByEmailController } from "../../infrastructure/UserDependencies";
import { updateUserController } from "../../infrastructure/UserDependencies";
import { deleteUserController } from "../../infrastructure/UserDependencies";

const UserRouter = Router();

UserRouter
    .get('/:id', (req, res) => getUserByIdController.handle(req, res))
    .get('/:username', (req, res) => getUserByUsernameController.handle(req, res))
    .post('/login', (req, res) => getUserByEmailController.handle(req, res))
    .post('/', (req, res) => createUserController.handle(req, res))
    .put('/:id', (req, res) => updateUserController.handle(req, res))
    .delete('/:id', (req, res) => deleteUserController.handle(req, res));

export default UserRouter;