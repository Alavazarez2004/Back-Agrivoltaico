import { GetUserByIdUseCase } from "../../application/use-cases/getUserByIdUseCase";
import { Request, Response } from "express";

export class GetUserByIdController {
    constructor(readonly getUserByIdUseCase: GetUserByIdUseCase) {}
    
    async handle(req: Request, res: Response) {
        try {
                const user_id = parseInt(req.params.id);
                const user = await this.getUserByIdUseCase.execute(user_id);
                return res.status(200).json(user);
        } catch (error: any) {
                return res.status(400).json({ message: error.message });
        }
    }
}