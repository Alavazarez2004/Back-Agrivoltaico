import { User } from "../../domain/models/User";
import { UserService } from "../../domain/services/UserService";
import bcrypt from 'bcrypt';

export class GetUserByEmailUseCase {
    constructor(private readonly userService: UserService) {}

    async execute(email: string, password: string): Promise<User | null> {

        const user = await this.userService.getUserByEmail(email);
        if (!user) {
            
            return null; // Usuario no encontrado o contraseña incorrecta
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        //console.log('Provided password:', isPasswordValid);

        if (isPasswordValid) {
            return user;
        } else {
            return null; // Contraseña incorrecta
        }
    }
}