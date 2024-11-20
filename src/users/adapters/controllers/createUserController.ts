import { CreateUserUseCase } from "../../application/use-cases/createUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
        const user = req.body;

        try {
            const newUser = await this.createUserUseCase.execute(user);
            if (!newUser) {
                return res.status(400).json({ error: "Usuario no Registrado" });
            }
            return res.status(201).json({ message: "Usuario Registrado"});
        } catch (error: any) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}