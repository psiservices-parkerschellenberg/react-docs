
function NewBtn({ count, handleClick }) {
    return (
        <button className="click-me" onClick={handleClick}>
            Times clicked: {count}
        </button>
    );
}

export default NewBtn;