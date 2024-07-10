import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        fetch ('http://localhost:4000/Login', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response =>response.json())
        .then(result =>{
            console.log(result)

        })
        .catch(error =>{
            console.log(error)
        })
    };

    return (
        <div className="custom-form">
            <form onSubmit={handleLogin}>
                <label className="custom-label">Username: </label>
                <input
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="username"
                    className="custom-input"
                    type="text"
                />
                <label className="custom-label">Password: </label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="password"
                    className="custom-input"
                    type="password"
                />
                <button className="custom-button" type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;