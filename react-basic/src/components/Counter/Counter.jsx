import { useState } from "react"
import './Counter.css'
import { useEffect } from "react"
import { useRef } from "react";

function Counter({ state }) {
    const [count, setCount] = useState(0)
    const [isFlashed, setFlashed] = useState(false);
    const flashTimeoutId = useRef(null);
    console.log(`render ${count} ${state}`);


    // useEffect(() => {
    //     // setCount(count + 1)
    //     // console.log("hello")
    //     setFlashed((isFlashed) => !isFlashed);


    //     return () => {
    // clearTimeout(timeoutId);
    //     };
    // }, [count]);

    const increment = () => {
        setCount(count + 1);
        setFlashed(true);
        clearTimeout(flashTimeoutId.current);

        flashTimeoutId.current = setTimeout(() => {
            setFlashed((isFlashed) => !isFlashed);
        }, 1000)
    }
        return (

            <button
                type="button"
                className={`Counter ${isFlashed ? 'Counter_flashed' : ''}`}
                onClick={increment}
            >
                Count is {count}
            </button>
        )

    
}

export default Counter