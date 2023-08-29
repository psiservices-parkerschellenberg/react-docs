import './App.css';
import Welcome from './components/Welcome';
//import LoginForm from './components/LoginForm';
import NewBtn from './components/NewBtn';
import ImageBtn from './components/ImageBtn';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import { useState } from 'react';


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
            <div style={{ display: 'flex', gap: 25 }}>
                <Form1 />
                <Form2 />
            </div>
        </div>
    );
}

export default App;
