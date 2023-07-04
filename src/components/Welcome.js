import React, { useState } from 'react';
import Items from './Items';
import ToggleBtn from './ToggleBtn';

function Welcome({ user }) {
    const [showItems, setShowItems] = useState(false);

    function toggleItems() {
        setShowItems(!showItems);
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