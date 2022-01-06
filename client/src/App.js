import React, {useEffect,useState} from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


function App() {

const [courier,setCourier] = useState(null)


  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((courier) => setCourier(courier));
      }
    });
  }, []);


  if (!courier) return <Login setCourier = {setCourier}/>

  return (
  <Router>
   <Switch>
    <Route path ='/Signup'>
     <Signup setCourier = {setCourier}/>
    </Route>
     <Route exact path = '/'>
      <Login setCourier = {setCourier} />
     </Route>
    </Switch>
  </Router>
  )
}

export default App;
