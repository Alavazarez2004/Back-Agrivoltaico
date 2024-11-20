import { User } from "../../domain/models/User";
import { UserService } from "../../domain/services/UserService";

export class GetUserByIdUseCase {
    constructor(readonly userService: UserService) {}

    async execute(user_id: number): Promise<User | null> {
        try {
            const user = await this.userService.getUserById(user_id);
            if (!user) {
                throw new Error("User not found");
            }

            return user;
        }
        catch (error) {
            return null;
        }
    }
}