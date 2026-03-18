import { Action } from "../App"

export const userLoginAction = (name:string, password:string):Action => {
    return { 
        action: "logearUsuario",
        payload: {
            user: name,
            password
        }
    }
}