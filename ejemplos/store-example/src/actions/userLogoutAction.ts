import { Action } from "../App"

export const userLogoutAction = (name:string):Action => {
    return { 
        action: "deslogearUsuario",
        payload: {name}
    }
}