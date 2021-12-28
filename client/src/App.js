import React, {useEffect,useState} from 'react'
import Login from './Login'
import Home from './Home'
import Signup from './Signup'
import Logout from './Logout'
import { Switch } from 'react-router-dom'
import {Route} from "react-router-dom";

function App() {

const [courier,setCourier] = useState("")

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((courier) => setCourier(courier));
      }
    });
  }, []);


  if (courier) {
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

    <h2>Welcome, {courier.name}!</h2>
    <div><Login/></div>
    
     <Switch>
       <Route exact path = "/" component = {<Login/>}/>
       <Route exact path = '/Home' element = {<Home/>}/>
       <Route exact path = '/Signup' component = {<Signup/>}/>
       <Route exact path = '/Login' component = {<Login/>}/>
       <Route exact path = '/Logout' component = {<Logout/>}/>
     </Switch>
    
   </>   
      
      );
    } else { 
        return <Login onLogin={setCourier} />;}
  }

export default App;
