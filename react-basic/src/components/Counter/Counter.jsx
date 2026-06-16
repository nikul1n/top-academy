import { useState } from "react"
import './Counter.css'
import { useRef } from "react";

function Counter({ state }) {
    const [count, setCount] = useState(0) //когда меняется состояние происходит отрисовка. Поменять состояние можно только сеттером (через set???)
    const [isFlashed, setFlashed] = useState(false);
    const flashTimeoutId = useRef(null); //ссылка на объект который сохраняется между отрисовками (рендерами)
    console.log(`render ${count} ${state}`);


    // useEffect(() => {
    //     setFlashed((isFlashed) => !isFlashed);


    //     return () => {
    //         clearTimeout(timeoutId);
    //     };
    // }, [count]);

    const increment = () => {
        setCount(count + 1);
        setFlashed(true);
        clearTimeout(flashTimeoutId.current);

        flashTimeoutId.current = setTimeout(() => {
            setFlashed((isFlashed) => !isFlashed); // isLoading
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