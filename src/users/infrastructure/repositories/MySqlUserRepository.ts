import { db } from "../../../database/db";
import { UserService } from "../../domain/services/UserService";
import { User } from "../../domain/models/User";
import bcrypt from 'bcrypt';

export class MySqlUserRepository implements UserService {
    async createUser(user: User): Promise<User | null> {

        const hashedPassword = await bcrypt.hash(user.password, 10);

        const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        const [result]:any = await db.query(query, [user.username, user.email, hashedPassword]);
        
        if (result.affectedRows === 0) {
            return null;
        }

        return result;
    }

    async getUserById(user_id: number): Promise<User | null> {
        const query = "SELECT user_id, username, password, email, deleted FROM users WHERE user_id = ?";
        const [rows]:any = await db.query(query, [user_id]);
        if (rows.length === 0) {
            if (rows.deleted === 1) {
                return null;
            }
            return null;
        }
        return rows[0];
        
    }

    async getUserByUsername(username: string): Promise<User | null> {
        const query = 'SELECT * FROM users WHERE username = ?';
        const [rows]:any = await db.query(query, [username]);
        if (rows.length === 0) {
            if (rows.deleted === 1) {
                return null;
            }
            return null;
        }

        return rows[0];
    }

    async getUserByEmail(email: string): Promise<User | null> {
        try {
            // Busca el usuario por email
            const query = 'SELECT * FROM users WHERE email = ?';
            const [rows]: any = await db.query(query, [email]);

            // Si no se encuentra el usuario, retorna null
            if (rows.length === 0) {
                console.log("Correo incorrecto");
                
                return null;
            }

            const user = rows[0];

            // Si se encuentra el usuario, retorna el usuario
            return user;
            } catch (error) {
            console.error('Error en el login:', error);
            return null;
        }
    }

    async updateUser(user_id: number, user: User): Promise<User | null> {
        const query = "UPDATE users SET username = ?, password = ?, email = ?, updated_at = ? WHERE user_id = ?";
        const date = new Date();
        const [result]:any = await db.query(query, [user.username, user.password, user.email, date, user_id]);

        if (result.affectedRows === 0) {
            if (result.deleted === 1) {
                return null;
            }
            return null;
        }

        return result;
    }

    async deleteUser(user_id: number): Promise<boolean | null> {
        const query = "UPDATE users SET deleted_at = ?, deleted = 1 WHERE user_id = ?";
        const date = new Date();
        const [result]:any = await db.query(query, [date, user_id]);

        if (result.affectedRows === 0) {
            if (result.deleted === 1) {
                return null;
            }
            return null;
        }

        return true;
    }

    async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainPassword, hashedPassword);
    }
}