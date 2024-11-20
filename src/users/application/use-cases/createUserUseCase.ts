import { error } from "console";
import { User } from "../../domain/models/User";
import { UserService } from "../../domain/services/UserService";

export class CreateUserUseCase {
    constructor(private readonly userService: UserService) {}

    async execute(user: User): Promise<User | null> {
        try {
            const UserExists = await this.userService.getUserByUsername(user.username);
            if (UserExists) {
                // throw new Error("Usuario existente");
                console.log("Error");
                
            }
            const newUser = await this.userService.createUser(user)

            return newUser;
        }
        catch (error) {
            console.log(error);
            return null;
            
        }
    }
}