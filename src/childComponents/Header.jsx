import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
       
                 <header>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-dark p-0">
                            <a className="navbar-brand" href="index.html" >
                                <img className="logo" src="./img/logo.png" alt="img" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="nav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="hello">Our Work</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="hello">How we do it</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="hello">Services</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>


           
        )
    }
}
