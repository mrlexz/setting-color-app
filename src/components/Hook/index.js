import React, { useState, useEffect } from 'react';

const Example = (props) => {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');

    useEffect(() => {
        document.title = `You clicked ${count} times `
    });
    return (
        <div>
            <h1>You clicked {count} times and the fruit is {fruit}</h1>
            <button onClick={() => {
                setCount(0);
                setFruit('banana');
            }}>Reset</button>
            <button onClick={() => {
                setCount(count + 1);
                count % 2 === 0 ? setFruit('coconut') : setFruit('apple');
            }}>+</button>
            <button onClick={() => {
                setCount(count - 1);
                count % 2 === 0 ? setFruit('coconut') : setFruit('apple');
            }}>-</button>
        </div>
    )
}
export default Example;