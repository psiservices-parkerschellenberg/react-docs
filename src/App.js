import './App.css';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';
import NewBtn from './components/NewBtn';
import ImageBtn from './components/ImageBtn';
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

    const texts = [
        'These are',
        'three',
        '<p> elements'
    ];

    return (
        <div className={`App ${isToggled ? 'BGimg' : ''}`}>
            {user.isLoggedIn
                ? ( <Welcome user={user} /> )
                : ( <LoginForm /> )
            }
            <NewBtn />
            <NewBtn />
            <NewBtn />
            <ImageBtn handleToggle={handleToggle} />
            <div>
                {texts.map((text, i) => (
                    <p key={i}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default App;
