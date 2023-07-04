

function Items( {items} ) {
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