import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


function Login({setCourier}) {
  
  const [credentials, setCredentials]=useState({
    username:'',
    password:'',
  })

  const history = useHistory()

  function handleChange(e){
    setCredentials({
      ...credentials,
    [e.target.name]:e.target.value,
    })
  }

  function handleClick() {
    history.push('/Signup')
  } 

  function handleLogin(e) {
    e.preventDefault()

    const submitCreds = {...credentials}

    fetch("/",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitCreds),
    }).then((resp) => {
        if (resp.ok) {
            resp.json().then((courier) => setCourier(courier))
          };
        })
    }

  return (
    <>
      <form onSubmit={handleLogin}>
      <label htmlFor="Email">Email:</label>
      <input
      type="text"
      id="username"
      name='username'
      value={credentials.username}
      onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
      type="password"
      id="password"
      name= 'password'
      value={credentials.password}
      onChange={handleChange}
      />
      <button type="submit">Login</button>
      </form>
      <button type='submit' onClick={handleClick}>Signup</button>
    </>

  )
      
}

export default Login