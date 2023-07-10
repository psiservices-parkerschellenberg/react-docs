import { useState } from 'react';

export default function Welcome({ user }) {
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

function ToggleBtn({ toggleItems }) {
    return (
        <button onClick={toggleItems}>
            show items
        </button>
    );
}

function Items({ items }) {
    const listItems = items.map(item =>
        <li key={item.id}>
            {item.title}
        </li>
    );

    return (
        <div>
            <h3>Your items:</h3>
            <ul>{listItems}</ul>
        </div>
    );
}