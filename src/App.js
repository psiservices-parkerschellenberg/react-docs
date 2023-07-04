import './App.css';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';


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

    return (
        <div className="App">
            {user.isLoggedIn
                ? ( <Welcome user={user} /> )
                : ( <LoginForm /> )
            }
        </div>
    );
}

export default App;
