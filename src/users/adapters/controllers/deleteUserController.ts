import { DeleteUserUseCase } from "../../application/use-cases/deleteUserUseCase";
import { Request, Response } from "express";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response) {
    
    const user_id = parseInt(req.params.id);

        try {
            const deletedUser = await this.deleteUserUseCase.execute(user_id);
            if (!deletedUser) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.status(204).json(deletedUser);
        } catch (error: any) {
            return res.status(500).json({ error: "Internal Server Error"});
        }
    }
}