import React from 'react'
import { Link } from 'react-router-dom'



function Navbar (){


return (
<header className = 'navbar'>
 <ul>
  <li><Link to='/Home'>Home</Link></li>
  <li><Link to='/Signup'>Signup</Link></li>
 </ul>
</header>
 )
}




export default Navbar