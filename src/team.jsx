import { useState } from "react"

export default function Team() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{border: '2px solid yellow', padding: '20px', margin: '20px', borderRadius: '20px'}}>
            <h3>Players: {count} </h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleReduce}>Reduce Player</button>
        </div>
    )
}