import React from 'react'
import Login from './Login'
import Home from './Home'
import Signup from './Signup'
import Logout from './Logout'
import { BrowserRouter as Router } from 'react-router-dom'
import {Route,Routes} from "react-router-dom";

function App() {


  // useEffect(() => {
  //   fetch("/me")
  //   .then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
<>
  <header className='navbar'>
    <ul>
      <li> <a href ='/Home'>Home </a></li>
      <li><a href = '/Signup'>Signup</a></li>
      <li><a href = '/Login'> Login</a></li>
      <li><a href = '/Logout'> Logout</a></li>
    </ul>
  </header>

    <h2>CYCLE AND FLOW </h2>
  <Router>
    <Routes>
       <Route exact path = "/" component = {<Login/>}/>
       <Route exact path = '/Home' component = {<Home/>}/>
       <Route exact path = '/Signup' component = {<Signup/>}/>
       <Route exact path = '/Login' component = {<Login/>}/>
       <Route exact path = '/Logout' component = {<Logout/>}/>
    </Routes>
  </Router>
  </>
  
  );
}

export default App;
