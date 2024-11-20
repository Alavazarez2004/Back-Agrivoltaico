import { User } from "../../domain/models/User";
import { UserService } from "../../domain/services/UserService";

export class UpdateUserUseCase {
    constructor(private readonly userService: UserService) {}

    async execute(user_id: number, user: User): Promise<User | null> {
        try {
            const userExists = await this.userService.getUserById(user_id);
            if (!userExists) {
                throw new Error("User not found");
            }

            return await this.userService.updateUser(user_id, user);
        }
        catch (error) {
            return null;
        }
    }
}