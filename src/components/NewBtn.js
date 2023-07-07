import { useState } from 'react';

function NewBtn() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button className="click-me" onClick={handleClick}>
            Times clicked: {count}
        </button>
    );
}

export default NewBtn;