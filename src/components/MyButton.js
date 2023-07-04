import './MyButton.css';

function MyButton({ toggleItems }) {
    return (
        <button onClick={toggleItems}>
            show items
        </button>
    );
}

export default MyButton;