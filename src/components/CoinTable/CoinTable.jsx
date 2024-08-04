import { useEffect, useState } from "react";

function CoinTable() {


    const [count, setCount] = useState(0);

    const [flag, setFlag] = useState(false);

    async function download() {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    
        console.log(response);
    
        const result =  await response.json();
    
        console.log(result);
        
    }

    useEffect(() => {
        // Because the dependency array is empty, this effect will only run once
        // when the component mounts
        download();
    }, [count]);

    useEffect(() => {
        // This effect will run when the component mounts, and every time the
        // flag variable changes
        console.log("Flag changed");
    }, [flag]);

    useEffect(() => {
        // This effect will run when the component mounts, and every time the
        // count variable changes
        console.log("everytime changed");
    });

    useEffect(() => {
        // This effect will run when the component mounts, and every time the
        // count or flag variable changes
        console.log("count or flag changed");
    } , [count, flag]);

    return (
        <>
            CoinTable
            {count}
            <br/>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            {flag && <div>Flag is true</div>}
            <br />
            <button onClick={() => setFlag(!flag)}>Toggle</button>
        </>
    );
}

export default CoinTable;