export class Usuario {

    id: string 
    email: string
    password: string
    username: string

    constructor(username: string,  password: string, email?: string){
        this.username = username
        this.password = password
        this.email = email
    }

}

// export class UsuarioLogin {

//     id: string 
//     password: string
//     username: string

//     constructor(username: string,  password: string, email?: string){
//         this.username = username
//         this.password = password
//     }
// }