import './App.css';
import MyButton from './components/MyButton';

const user = {
    name: "Parker",
    age: 27,
    loggedIn: true
};

function App() {
  return (
    <div className="App">
          <h1>Welcome {user.name}!</h1>
      <MyButton/>
    </div>
  );
}

export default App;
