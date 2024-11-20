import { UpdateUserUseCase } from "../../application/use-cases/updateUserUseCase";
import { Request, Response } from "express";

export class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) {}
    
    async handle(req: Request, res: Response) {
        try {
                const user_id = parseInt(req.params.id);
                const user = req.body;
                await this.updateUserUseCase.execute(user_id, user);
                return res.status(204).send();
        } catch (error: any) {
                return res.status(400).json({ message: error.message });
        }
    }
}