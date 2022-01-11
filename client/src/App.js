import React, {useEffect,useState} from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'
import Home from './Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


function App() {

const [courier,setCourier] = useState(null)
// const [courierCard, setCourierCard] = useState([])

// useEffect(getCouriers,[])

// function getCouriers() {
//   fetch('/couriers')
//   .then(res => res.json())
//   .then(users=>setCourierCard(users))
//   }
  
  // function onSubmit(newCourier) {
  //   setCourierCard ([newCourier,...courierCard])
 
  // }


  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((courier) => setCourier(courier));
      }
    });
  }, []);


  // if (!courier) return <Login setCourier = {setCourier}/>

  return (
  <Router>
   <Switch>
    <Route path='/Signup'>
     <Signup setCourier = {setCourier}/>
    </Route>
     <Route exact path = '/'>
      <Login setCourier = {setCourier} />
     </Route>
     <Route path='/Home'>
       <Home/>
     </Route>
    </Switch>
  </Router>
  )
}

export default App;
