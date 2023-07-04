const items = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

function Items() {
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

export default Items;