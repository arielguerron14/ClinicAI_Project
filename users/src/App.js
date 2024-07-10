import './App.css';
import {useState} from React;

const App = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handdleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password : password
    }

    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result =>{
      console.log(result) 
    })
    .catch(error=>{
      console.log(error) 
    })
    }
  
  return (
    <div className="App">
      .
    </div>
  );
}

export default App;
