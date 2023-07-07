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

    const [bgImage, setBgImage] = useState('');

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 300) + 1;
        const imageUrl = `https://picsum.photos/id/${randomNumber}/200/300`;
        setBgImage(imageUrl);
    };


    return (
        <div className="App" style={{ backgroundImage: `url(${bgImage})` }}>
            {user.isLoggedIn
                ? ( <Welcome user={user} /> )
                : ( <LoginForm /> )
            }
            <NewBtn />
            <NewBtn />
            <NewBtn />
            <ImageBtn handleClick={handleClick} />
        </div>
    );
}

export default App;
