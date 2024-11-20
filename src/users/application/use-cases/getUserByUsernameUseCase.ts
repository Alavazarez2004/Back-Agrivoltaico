import { User } from "../../domain/models/User";
import { UserService } from "../../domain/services/UserService";

export class GetUserByUsernameUseCase {
    constructor(private readonly userService: UserService) {}

    async execute(username: string): Promise<User | null> {
        try {
            const user = await this.userService.getUserByUsername(username);
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