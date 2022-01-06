import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Signup({setCourier}){

const submitForm = useHistory()

const history = useHistory()

const [signedUp, setSignedUp] = useState({
name:'',
email: '',
address:'',
password:''
})

useEffect(() => {
    console.log(signedUp)
  },[signedUp])

function handleBack(){
    history.push('/')
}

 function registerNew(){
    submitForm.push(
        '/Home'
    )
 }

 function handleChange(e){
    console.log(e.target.name)
    console.log(e.target.value)
    setSignedUp({[e.target.name]:e.target.value})
    
}

    function handleSubmit(e){
        e.preventDefault()
        console.log('Signing up...')
        const newAccount={ name: signedUp.name,
            email: signedUp.email,
            address: signedUp.address,
            password: signedUp.password
        }
        fetch('/signup',{
        method: 'POST',
        headers:{
            'Content-Type': "application/json",
            },
        body: JSON.stringify(newAccount),
        }).then((resp) => {
            if (resp.ok) {
            resp.json().then((courier) => setCourier(courier))
          };
        })
    }

return  (
    <>
      <form onSubmit={handleSubmit} >
        <label>New Courier Signup</label>
        <br></br>
        <label htmlFor='name'>Name:</label>
        <input
        type="text"
        name="name"
        value={signedUp.name}
        onChange={handleChange}
        >
        </input>
        <br></br>
        <label htmlFor='email'>Email:</label>
         <input
         type="text"
         name="email"
         value={signedUp.email}
         onChange={handleChange}
         >
        </input>
        <br></br>

        <label htmlFor='address'>Address:</label>
         <input
         type="text"
         name="address"
         value={signedUp.address}
         onChange={handleChange}
         >
        </input>
        <label htmlFor='password'>Password:</label>
        <input
         type="password"
         name="password"
         value={signedUp.password}
         onChange={handleChange}
         >
        </input>
    <button> Signup! </button>
      </form>
     
      <button onClick={handleBack}>Return</button>
      </>
    )
}

export default Signup