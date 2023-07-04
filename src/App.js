import './App.css';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';

const user = {
    name: "Parker",
    age: 27,
    isLoggedIn: true
};


function App() {
    return (
        <div className="App">
            {user.isLoggedIn && <Welcome user={user} />}
        </div>
    );
}

export default App;
