import { User } from "../models/User";

export interface UserService {
    createUser(user: User): Promise<User | null>;
    getUserById(user_id: number): Promise<User | null>;
    getUserByUsername(username: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    updateUser(user_id: number, user: User): Promise<User | null>;
    deleteUser(user_id: number): Promise<boolean | null>;
    comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean>;  // Añadido
}

