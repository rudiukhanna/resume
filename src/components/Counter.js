import { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    return <>
        <div>
        <h1>{number}</h1>
        <button onClick={()=>setNumber(number + 1)}>Add</button>
        <button onClick={()=> setNumber(number - 1)}>Reduce</button>
        </div>
    </>
};

export default Counter;