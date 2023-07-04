import { useState } from 'react';
import Items from './Items';
import ToggleBtn from './ToggleBtn';

function Welcome({ user }) {
    const [showItems, setShowItems] = useState(false);
    const [count, setCount] = useState(0);

    function toggleItems() {
        setShowItems(!showItems);
        setCount(count + 1);
    }

    return (
        <div className="Welcome">
            <h1>Welcome {user.name}!</h1>
            <p>You are logged in.</p>
            <ToggleBtn toggleItems={toggleItems} />
            {showItems && <Items items={user.items} />}
        </div>
    );
}

export default Welcome;