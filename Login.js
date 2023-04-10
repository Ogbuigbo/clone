import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
import { auth } from './Firebase';
import './Login.css';

function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword]  = useState('');
    const[name, setName] = useState('');
    const[profilePic, setProfilePic] = useState('');
    const dispatch=  useDispatch();

    const signIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        })
        .catch((error)=> alert(error));
    }
    
    const register = (e) =>{
        e.preventDefault();

        if(!name){
            return alert('Please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })

            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }));
            });
        }).catch((error)=> alert(error))

    }
    
    return (
    <div className='login'>
       
       <img 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'
       />
    
    <form>
        <input value={name} type='text' onChange={(e)=> setName(e.target.value)} placeholder='Full name (required if registering)' />

        <input value={profilePic} type='text' placeholder='Profile pic URL (optional)' onChange={(e)=> setProfilePic(e.target.value)}  />

        <input value={email} type='email' placeholder='Email' onChange={ (e)=> setEmail(e.target.value)} />
        <input value={password} type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value) } />

        <button type='submit' onClick={signIn}>Sign In</button>
    </form>

    <p>Not a member?{' '}
        <span className='login__register' onClick={register}>Register Now</span>
    </p>
    </div>
  )
}

export default Login