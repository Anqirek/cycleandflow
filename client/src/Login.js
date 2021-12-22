import React, {useState} from 'react'


function Login() {

    const loginURL = '/'

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    
    
        function submitLogin() {
    
            fetch(loginURL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ 
                username,
                password,
               }),
            })
              .then((res) => res.json())
              .then((courier) => setUsername(courier));
          }
    
          
        
    return (
        <form onSubmit={submitLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /> */}
        <button type="submit">Login</button>
      </form>

    

  )
    
}

export default Login