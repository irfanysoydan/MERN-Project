import './App.css';
import Header from "./Components/Header.js"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import Register from './Screens/Register';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Header user={user} setUser={setUser}/>
      <main className='py-3'>
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen user = {user}/>} exact></Route>
          <Route path='/login' element={<LoginScreen setUser={setUser}/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
        </Routes>
      </Container>
      </main>
    </Router>
  );
}

export default App;
