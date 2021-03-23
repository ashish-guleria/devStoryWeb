import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-3">
                                <div className="logo-footer">
                                    <a href="index.html">

                                        <img src='./img/logo-footer.png' alt="img" />
                                    </a>
                                </div>
                                <div className="social-media">
                                    <ul>
                                        <li> <a className="fa fa-facebook" aria-hidden="true" href="/hello"></a> </li>
                                        <li> <a className="fa fa-twitter" aria-hidden="true" href="hello"></a> </li>
                                        <li> <a className="fa fa-instagram" aria-hidden="true" href="hello"></a> </li>
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
                                        <li> <a href="hello">Services</a> </li>
                                        <li> <a href="hello">Live Support</a> </li>
                                    </ul>
                                    <ul>
                                        <li> <a href="hello">Blog</a> </li>
                                        <li> <a href="hello">How we do it</a> </li>
                                    </ul>
                                    <ul>
                                        <li> <a href="hello">Support</a> </li>
                                        <li> <a href="hello">Get Free Quote</a> </li>
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
