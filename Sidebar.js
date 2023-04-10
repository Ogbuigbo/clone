import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import './Sidebar.css';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar__recentitem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
        <img src='https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80' alt='' />
        <Avatar src={user.photoUrl} className='sidebar__avatar' >
            {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statnum'>3,453</p>
            </div>

            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statnum'>1,453</p>
            </div>

        </div>

        <div className='sidebar__button'>
            <p>Recent </p>
            {recentItem('react js')}
            {recentItem('programming')}
            {recentItem('software engineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar