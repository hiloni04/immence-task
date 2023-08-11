import React from 'react';
import NavBar from './components/NavBar/NavBar';
import CreateUser from './components/CreateUserForm/CreateUser';
import './App.css'
import ListUsers from './components/ListUsers/ListUsers';


function App() {
  return (
    <>
      <NavBar />
      <div className='sections'>
      <CreateUser />
      <ListUsers/>
      </div>
      

    </>
  );
}

export default App;
