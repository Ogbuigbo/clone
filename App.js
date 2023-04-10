import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './Firebase';
import Widjet from './Widjet';


function App() {
  
   const user = useSelector(selectUser);
  const dispatch = useDispatch();

   useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth) {
        // logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      }
      else{
        // logged out
        dispatch(logout());
      }
    });
   }, [])


  return (
    <div className='app'>
      <Header />

    {!user ? (<Login />) :(
      <div className='app__body'>
        <Sidebar />

        <Feed />

        <Widjet />
      </div>
    )}
      
    </div>
  );
}

export default App;
