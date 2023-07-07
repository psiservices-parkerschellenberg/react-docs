import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';
import NewBtn from './components/NewBtn';


function App() {
    const user = {
        name: "Parker",
        age: 27,
        isLoggedIn: true,
        items: [
            { title: 'Cabbage', id: 1 },
            { title: 'Garlic', id: 2 },
            { title: 'Apple', id: 3 },
        ]
    };

    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="App">
            {user.isLoggedIn
                ? ( <Welcome user={user} /> )
                : ( <LoginForm /> )
            }
            <NewBtn count={count} handleClick={handleClick} />
            <NewBtn count={count} handleClick={handleClick} />
            <NewBtn count={count} handleClick={handleClick} />
        </div>
    );
}

export default App;
