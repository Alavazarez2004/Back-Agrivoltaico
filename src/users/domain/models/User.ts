export class User {
    constructor(
        readonly user_id: number,
        readonly username: string,
        readonly email: string,
        readonly password: string,
        readonly created_at: Date,
        readonly updated_at: Date,
        readonly updated_by: number,
        readonly deleted_at: Date | null = null,  // Valor predeterminado a null
        readonly deleted_by: number | null = null,  // Valor predeterminado a null
        readonly deleted: boolean = false  // Valor predeterminado a false
    ) {}
}