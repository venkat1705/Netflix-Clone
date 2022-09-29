import React, { useState } from 'react'
import styled from 'styled-components'
import background from '../assets/login.jpg'
import Header from '../components/Header';
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';




const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async ()=>{
    try {
      await signInWithEmailAndPassword(firebaseAuth,email,password);
    } catch (error) {
      console.log(error)
    }
  };

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser){
      navigate("/")
    }
  })

  return (
    <Container>
      <img src = {background} alt = "background" style = {{width:"100vw",height:"100vh"}}/>
      <div className='content'>
      <Header login/>
      
      <div className='body flex column a-center j-center'>
        <div className='text flex column'>
          <h1>Unlimited movies,TV shows and more..</h1>
          <h4>Watch anywhere, Cancel anytime.</h4>
          <h6>Ready to watch? Enter your email to create or restart membership</h6>
        </div>
        <div className='form'>
          <h2>Log In</h2>
          <input type="email" placeholder = "Email Address" name = "email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type = "password" placeholder='Password' name = "password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <button onClick={handleLogin}>Log In</button>
         <h3 style={{marginLeft:'auto',marginRight:'auto'}}>Dont have an Account ? <Link to="/signup" style={{color:'white'}}>Sign Up</Link></h3>
          
        </div>
      </div>
      </div>
    </Container>
  )
}

const Container = styled.div` 
  position:relative;
  .content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
    .body{
      gap:1rem;
      .text{
        gap:1rem;
        text-align:center;
        font-size:2rem
        h1{
          padding:0 25rem;
        }
      }
      .form{
        display:flex;
        flex-direction:column;
        justify-content:center;
        gap:2rem;
        background-color:#000000b0;
        width:35vw;
        height:55vh;
        h2{
          margin-left:auto;
          margin-right:auto;

        }
        input{
          color:black;
          border:none;
          padding :1rem;
          width:350px;
          font-size:1.2rem;
          border:1px solid black;
          outline:none;
          margin-left:auto;
          margin-right:auto;
          &:focus{
            outline:none;
          }
        }
        button {
        padding:0.5rem 1rem;
        background-color:#e50914;
        border:none;
        cursor:pointer;
        color:white;
        border-radius:0px 5px 5px 0px;
        font-weight:bolder;
        font-size:1.05rem;
        width:350px;
        margin-left:auto;
          margin-right:auto;
        }
      }
    }
  }
`;

export default Login