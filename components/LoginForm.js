import React, {useRef, useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle,faLinkedin} from '@fortawesome/free-brands-svg-icons';

//import axios from 'axios';
import './LoginForm.css';







const LoginForm = () => {

  const userRef = useRef();
  const errRef = useRef();

const [user, setUser] = useState('');
const [pwd,setPwd] = useState('');
const [errMsg, setErrMsg] = useState('')
const [sucess, setSucess]= useState(false);


useEffect(() => {
  userRef.current.focus();
}, [])

useEffect(()=>{
  setErrMsg('');
}, [user, pwd])


const handleSubmit = async (e)=>{
   e.preventDefault();
   console.log(user, pwd);
   setUser('');
   setPwd('')
   setSucess(true); 

}  


  return (
 
    <div>
    {sucess ? (
     <section>
     <h1>You are Logged in</h1>
     <br/>

     <p>
     
     <a href="#">Go to Home</a>
     </p>

     </section>

    ) : (
  

    <div className='cover'>
    
  <p ref={errRef} className={errMsg ? "errmsg" :
  "offscreen"} aria-live="assertive">{errMsg}</p>
  
    <h1>Login</h1>


    <form onSubmit={handleSubmit}>

    <label htmlFor="username" className='usernameclass'>Username</label>
    <br/>
    <input type="text" 
    id="username" 
    autoComplete ="off"
    onChange={(e)=> setUser(e.target.value)}
    value= {user}
    required
    ref={userRef} 

    placeholder="username" />

    <label htmlFor="password" className='userppass'>Password</label>
<br/>
    <input type= "password"
    id ="password"
    onChange={(e)=> setPwd(e.target.value)}
    value= {pwd}
  
    required
    placeholder="password"/>

    <button className='Login-btn'>Login</button>
    <p className='text'>or login using?</p>

    <div className='alt-login'>
    <div className='Linkedin'><FontAwesomeIcon icon={ faLinkedin} className="FontAwesomeIcon" /></div>
    <div className='google'><FontAwesomeIcon icon={ faGoogle} className="FontAwesomeIcon" /></div>
    <div className='google'><FontAwesomeIcon icon={ faFacebook} className="FontAwesomeIcon" /></div>  
    </div>
    
</form>

   

    <p>
       Need an Account?

       <span className="Line">
    {/*put router Link here*/}
       <a href="#">Sign Up </a>
       </span>
    </p>
  
   
    </div>

 )}
    
      
  
      </div>
  )}
   
  
  
export default LoginForm;