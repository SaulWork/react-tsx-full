import { State, Action } from "./types";


export const initialState: State ={
    count: 0
}

export const reducer = (state: State, action: Action): State => {

    switch(action.type) {
        case 'DECREMENT': return {...state, count: state.count - 1}
        case 'INCREMENT': return {...state, count: state.count + 1}
        default: return  {...state}
    }

}