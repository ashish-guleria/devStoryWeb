import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-3">
                                <div className="logo-footer">
                                    <Link to="/">

                                        <img src='./img/logo-footer.png' alt="img" />
                                    </Link>
                                </div>
                                <div className="social-media">
                                    <ul>

                                        <li> <Link className="fa fa-facebook" aria-hidden="true" to="/"> </Link> </li>
                                        <li> <Link className="fa fa-twitter" aria-hidden="true" to="/"> </Link> </li>
                                        <li> <Link className="fa fa-instagram" aria-hidden="true" to="/"> </Link> </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="contact-info">
                                    <p className="p14-dark-2 mb-3">+98 5721912323 +91 2334782819
                                    DevStory@info.com
                     </p>
                                    <p className="p14-dark-2">Arth Prakash Building, Sector - 29D,<br />/ Chandigarh 160029</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-5">
                                <h5 className="footer-heading">Links</h5>
                                <div className="footer-links">
                                    <ul>
                                        <li> <Link to="/dataCenter">Services</Link> </li>
                                        <li> <Link to="/development">Live Support</Link> </li>
                                    </ul>
                                    <ul>
                                        <li> <Link to="/ui_ux">Blog</Link> </li>
                                        <li> <Link to="/howWeDoit">How we do it</Link> </li>
                                    </ul>
                                    <ul>
                                        <li> <Link to="/development">Support</Link> </li>
                                        <li> <Link to="/quote">Get Free Quote</Link> </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>


            </div>
        )
    }
}
