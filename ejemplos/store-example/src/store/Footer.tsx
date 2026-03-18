import { useStore } from "./store"

const Footer = () => {
    const {state:{count}} = useStore()
    return <p>el contador va por el numero {count}</p>
}

export default Footer