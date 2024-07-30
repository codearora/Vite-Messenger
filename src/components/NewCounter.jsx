import React, { useEffect, useState } from "react";

export default function NewCounter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("useEffect")
    }, [])
    return (
        <>
            <div>New Counter</div>
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>Button</button>
        </>
    )
}