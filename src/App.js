import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

const user = {
    name: "Parker",
    age: 27,
    isLoggedIn: true
};


function App() {
    let content;
    if (user.isLoggedIn) {
        content = <Home user={user} />;
    } else {
        content = <LoginForm />;
    }

    return (
        <div className="App">
            { content }
        </div>
    );
}

export default App;
