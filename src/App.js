import React, {useState} from 'react';
import './App.css';

import Title from './Title/Title';
import UserInput from './UserInput/UserInput';
import List from './List/List';
import NavbarPage from './NavBar/NavBar2';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

function App() {
  const [todo, setToDo] = useState(
    []
  );
  return (
    <>
      <NavbarPage/>
      <Title />
      <UserInput myfunction={setToDo} todo={todo} />
      {
        todo.map((val,i) => {
          const str=`Task ${i}`;
          return <List  id = {i} key={i} number={str} todo={val.subject} todos={todo} setTodo={setToDo} myfunction={setToDo}/>
        })
      }
    </>
  );
}

export default App;
