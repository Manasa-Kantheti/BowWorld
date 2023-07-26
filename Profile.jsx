import React from 'react'
import './profile.css'
import ProfileImg from '../assets/profile.png'

const Profile = () => {
    return (
        <div className='w-p-100 h-p-100 profile-cointainer'>
            <div className="wrapper">
                <div className="user-card">
                    <div className="user-card-img">
                        <img src={ProfileImg} alt="Profile" />
                    </div>
                    <div className="user-card-info">
                        <h2>Manasa Kantheti</h2>
                        <p><span>Email:</span> example@example.com</p>
                        <p><span>Location:</span> Vijayawada</p>
                        <p><span>Occupation:</span> Web Developer</p>
                        <p><span>About me:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile