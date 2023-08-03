import React from 'react'
import { BiMessageDetail } from "react-icons/bi"
import { BsBell } from "react-icons/bs"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className="container-fluid">
                <a className="navbar-brand " href="#">Digishop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="#">Rent</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Buy</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link " href="#">Sell</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link " href="#">Manage Property</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link " href="#">Virtual Tour</a>
                        </li>
                    </ul>
                    <div className="notifications d-flex">

                        <div className="notification-box">
                            <BsBell className='icon' />
                            <p className="unread">5</p>
                        </div>

                        <div className="message-box">
                            <BiMessageDetail className='icon' />
                            <p className="unread">10</p>
                        </div>

                    </div>
                    <div className="profile-container d-flex">
                        <div className="img-container">
                            <img 
                            src="/images/profile.jpg" 
                            alt="profile" 
                            className="profile-img "
                            />
                        </div>
                        <div className="profile-text">
                            <span className="welcome">Good Morning</span>
                            <span className="name">Andrew Garfild</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
