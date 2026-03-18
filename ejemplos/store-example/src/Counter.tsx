const Counter = ({value, onChange}: {value:number, onChange:(key:string) => void}) => {
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => onChange('+')}>+</button>
            <button onClick={() => onChange('-')}>-</button>
        </div>
    )
}
export default Counter