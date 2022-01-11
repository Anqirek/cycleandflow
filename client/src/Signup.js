import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Signup({setCourier}){

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [address, setAddress] = useState('')
const submitForm = useHistory()

const history = useHistory()

// const [signedUp, setSignedUp] = useState({
// name:'',
// email: '',
// address:'',
// password:''
// })



// useEffect(() => {
//     console.log(signedUp)
//   },[signedUp])

function handleBack(){
    history.push('/')
}


//  function handleChange(e){
//     console.log(e.target.name)
//     console.log(e.target.value)
//     setSignedUp({[e.target.name]:e.target.value})
    
// }

    function handleSubmit(e){
        e.preventDefault()
        console.log('Signing up...')
        fetch('/signup',{
        method: 'POST',
        headers:{
            'Content-Type': "application/json",
            },
        body: JSON.stringify({
           name,
           email,
           address,
           password,
        }),
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
        value={name}
        onChange={(e)=>setName(e.target.value)}
        >
        </input>
        <br></br>
        <label htmlFor='email'>Email:</label>
         <input
         type="text"
         name="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         >
        </input>
        <br></br>

        <label htmlFor='address'>Address:</label>
         <input
         type="text"
         name="address"
         value={address}
         onChange={(e)=>setAddress(e.target.value)}
         >
        </input>
        <label htmlFor='password'>Password:</label>
        <input
         type="password"
         name="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         >
        </input>
    <button type = 'submit'> Signup! </button>
      </form>
     
      <button onClick={handleBack}>Return</button>
      </>
    )
}

export default Signup