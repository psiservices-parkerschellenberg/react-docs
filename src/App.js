import './App.css';
import Welcome from './components/Welcome';
//import LoginForm from './components/LoginForm';
import NewBtn from './components/NewBtn';
import ImageBtn from './components/ImageBtn';
import Form1 from './components/Form1';
import { useState } from 'react';


function App() {
    const user = {
        name: "Parker",
        age: 27,
        isLoggedIn: false,
        items: [
            { title: 'Cabbage', id: 1 },
            { title: 'Garlic', id: 2 },
            { title: 'Apple', id: 3 },
        ]
    };

    const [isToggled, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggled);
    };

    return (
        <div className={`App ${isToggled ? 'BGimg' : ''}`}>
            {user.isLoggedIn
                ? ( <Welcome user={user} /> )
                //: (<LoginForm />)
                : null
            }
            <NewBtn />
            <NewBtn />
            <NewBtn />
            <ImageBtn handleToggle={handleToggle} />
            <Form1 />
        </div>
    );
}

export default App;
