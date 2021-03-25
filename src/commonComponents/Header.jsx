import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
       
                 <header>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-dark p-0">
                            <Link className="navbar-brand" to="/" >
                                <img className="logo" src="./img/logo.png" alt="img" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="nav">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <NavLink exact className="nav-link " to="/development">Our Work</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link " to="/howWeDoit">How we do it</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link " to="/webDesign">Services</NavLink>
                                    </li>
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>


           
        )
    }
}
