import React, { useState } from 'react';
import Items from './Items';
import MyButton from './MyButton';

function Welcome({ user }) {
    const [showItems, setShowItems] = useState(false);

    function toggleItems() {
        setShowItems(!showItems);
    }

    return (
        <div className="Welcome">
            <h1>Welcome {user.name}!</h1>
            <p>You are logged in.</p>
            <MyButton toggleItems={toggleItems} />
            {showItems && <Items />}
        </div>
    );
}

export default Welcome;