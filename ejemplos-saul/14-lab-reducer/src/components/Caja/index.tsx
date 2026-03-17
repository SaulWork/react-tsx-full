import { useReducer, useEffect } from 'react'

type MyState = {
    posX: number;
    posY: number;
}

type MyAction = {
    type: 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown'
}

const initialState: MyState = {
  posX: (window.innerWidth / 2) - 50,
  posY: (window.innerHeight / 2) - 50
}

function reducer(state: MyState, action: MyAction) {
  switch(action.type) {
    case 'ArrowLeft':
      return {...state, posX: state.posX-10};
    case 'ArrowRight':
      return {...state, posX: state.posX+10};
    case 'ArrowUp':
      return {...state, posY: state.posY-10};
    case 'ArrowDown':
      return {...state, posY: state.posY+10};
    default:
      return state;
  }
}

const Caja = () => {
  const [coords, dispatch] = useReducer<MyState, any>(reducer, initialState)

const dispatchAction = (e: KeyboardEvent) => {
  dispatch({type: e.key})
}

useEffect(() => {
  window.addEventListener('keydown', dispatchAction);

  return () => {
    window.removeEventListener('keydown', dispatchAction);
  }
}, [])

return (
  <div style={{
    width: '100px', 
    height: '100px', 
    backgroundColor: "#ccc",
    position: 'absolute', 
    left: coords.posX, 
    top: coords.posY
    }} />
  )
}

export default Caja