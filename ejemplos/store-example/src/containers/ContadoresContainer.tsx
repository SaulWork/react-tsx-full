import Counter from "../Counter"
import { useStore } from "../store/store"

const ContadoresContainer = () => {
    const {state, dispatch} = useStore()


   const onChangeHandler = (key: string) => {
        key === '+' && dispatch({type: 'INCREMENT'}) 
        key === '-' && dispatch({type: 'DECREMENT'}) 
    }


    return <Counter value={state.count} onChange={onChangeHandler}></Counter>

}

export default ContadoresContainer