import { GetUserByUsernameUseCase } from "../../application/use-cases/getUserByUsernameUseCase";
import { Request, Response } from "express";

export class GetUserByUsernameController {
    constructor(private getUserByUsernameUseCase: GetUserByUsernameUseCase) {}
    
    async handle(req: Request, res: Response) {
        try {
                const username = req.params.username;
                const user = await this.getUserByUsernameUseCase.execute(username);
                return res.status(200).json(user);
        } catch (error: any) {
                return res.status(400).json({ message: error.message });
        }
    }
}