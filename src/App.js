import './App.css';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';
import NewBtn from './components/NewBtn';
import { useEffect } from 'react';


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

    useEffect(() => {
        console.log('effect used');
    }, []);

    return (
        <div className="App">
            {user.isLoggedIn
                ? ( <Welcome user={user} /> )
                : ( <LoginForm /> )
            }
            <NewBtn />
            <NewBtn />
            <NewBtn />
        </div>
    );
}

export default App;
