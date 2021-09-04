export class Usuario {

    id: string 
    email: string
    password: string
    username: string

    constructor(username: string, email: string, password: string){
        this.username = username
        this.email = email
        this.password = password
    }
}