import React, { Component } from 'react'



import Footer from "../commonComponents/Footer"
import Header from "../commonComponents/Header"
import FocusContent from "../commonComponents/FocusContent"

export default class Home extends Component {

    render() {
        return (
            <div>

               <Header/>

                <div id="wrapper">
                    <section className="main-banner section">
                        <div className="mob-bg">
                            <div className="arrow-img-layer">
                                <div className="container">
                                    <div className="banner-caption">
                                        <div className="heading-grp">
                                            <h2 data-aos="fade-up" data-aos-duration="400">Your Story Our Development<span className="yellow-color">.</span></h2>
                                        </div>


                                        <div className="main-info-row">
                                            <div className="info-blk" data-aos="fade-up" data-aos-duration="300">
                                                <p>200</p>
                                                <h4>Clients</h4>
                                            </div>
                                            <div className="info-blk" data-aos="fade-up" data-aos-duration="300">
                                                <p>200</p>
                                                <h4>Upwork</h4>
                                            </div>
                                            <div className="info-blk" data-aos="fade-up" data-aos-duration="300">
                                                <p>200</p>
                                                <h4>Employee</h4>
                                            </div>
                                            <div className="info-blk" data-aos="fade-up" data-aos-duration="300">
                                                <p>200</p>
                                                <h4>Apps & Websites</h4>
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-md-7">
                                                <p className="p16-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                                <div className="getfree-qot-blk marginT34">
                                                    <a className="btn-dark btn float-left" href="hello">GET FREE QUOTE</a>
                                                    <a className="user-icon notification" href="hello">
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="help-blk">
                                                    <div className="text-right">
                                                        <p>Hi! Looking for help?</p>
                                                        <div className="fig-blk">
                                                            <img src="./img/query-img.png" alt="img" />
                                                        </div>
                                                        <div className="query-input">
                                                            <input type="text" name="" placeholder="Type your querries here" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section brands-section white-section section-padding-top">
                        <div className="container">
                            <div className="heading-grp main-heading-spacing">
                                <h2 className="mb-3">Big brands love working with us<span className="yellow-color">.</span></h2>
                                <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-6">
                                    <div className="fig-blk" data-aos="fade-up" data-aos-duration="300">
                                        <img className="img-fluid" src="./img/b1.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="fig-blk" data-aos="fade-up" data-aos-duration="600">
                                        <img className="img-fluid" src="./img/b2.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="fig-blk" data-aos="fade-up" data-aos-duration="900">
                                        <img className="img-fluid" src="./img/b3.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="fig-blk" data-aos="fade-up" data-aos-duration="1200">
                                        <img className="img-fluid" src="./img/b4.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="fig-blk" data-aos="fade-up" data-aos-duration="300">
                                        <img className="img-fluid" src="./img/b5.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="fig-blk" data-aos="fade-up" data-aos-duration="600">
                                        <img className="img-fluid" src="./img/b6.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="fig-blk" data-aos="fade-up" data-aos-duration="900">
                                        <img className="img-fluid" src="./img/b7.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-6">
                                    <div className="fig-blk" data-aos="fade-up" data-aos-duration="1200">
                                        <img className="img-fluid" src="./img/b4.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    

<FocusContent/>



                    <section className="section success-section white-section section-padding-top section-padding-bottom">
                        <div className="container">
                            <div className="heading-grp main-heading-spacing">
                                <h2 className="mb-3">These tasted success with us<span className="yellow-color">.</span></h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6 order-md-2">
                                            <div className="fig-blk">
                                                <img className="img-fluid" src='./img/dashboard-mob.png' alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 order-md-1">
                                            <div className="success-blk" data-aos="fade-up" data-aos-duration="400">
                                                <div className="heading-grp-2 text-left">
                                                    <h4>Fit Bit Amazon</h4>
                                                    <p>Android/IOS</p>
                                                </div>
                                                <ul className="ul-style">
                                                    <li>Website Designing</li>
                                                    <li>Content writting</li>
                                                </ul>
                                                <p className="p12-light text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry which is great.</p>
                                                <ul className="ul-style">
                                                    <li>Website Designing</li>
                                                    <li>Content writting</li>
                                                </ul>
                                                <p className="p12-light text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry which is great.</p>
                                                <div className="mt-3 text-left">
                                                    <a className="learn-more-btn" href="hello" tabindex="0">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6 order-md-2">
                                            <div className="fig-blk">
                                                <img className="img-fluid" src='./img/dashboard-mob.png' alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 order-md-1">
                                            <div className="success-blk" data-aos="fade-up" data-aos-duration="800">
                                                <div className="heading-grp-2 text-left">
                                                    <h4>Uber Eats</h4>
                                                    <p>Android/IOS</p>
                                                </div>
                                                <ul className="ul-style">
                                                    <li>Website Designing</li>
                                                    <li>Content writting</li>
                                                </ul>
                                                <p className="p12-light text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry which is great.</p>
                                                <ul className="ul-style">
                                                    <li>Website Designing</li>
                                                    <li>Content writting</li>
                                                </ul>
                                                <p className="p12-light text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry which is great.</p>
                                                <div className="mt-3 text-left">
                                                    <a className="learn-more-btn" href="hello" tabindex="0">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section checkout-section section-margin-top">
                        <div className="container">
                            <div className="heading-grp main-heading-spacing">
                                <h2 className="mb-3">Checkout how things get to you<span className="yellow-color">.</span></h2>
                                <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                            </div>
                            <div className="out-container-right">
                                <div className="fig-blk">
                                    <img className="img-fluid" src="./img/design.png" alt="img" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 order-md-1">
                                    <p className="p14-dark mt-5" data-aos="fade-up" data-aos-duration="400">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  </p>
                                    <ul className="ul-style mt-5" data-aos="fade-up" data-aos-duration="400">
                                        <li>Requirement Gathering</li>
                                        <li>Graphics & UI/UX Designing</li>
                                        <li>Mobile / Web Development</li>
                                        <li>Deployment</li>
                                        <li>Social Media Marketing</li>
                                        <li>Maintenance & Support</li>
                                    </ul>
                                    <div className="mt-5 text-left">
                                        <a className="learn-more-btn" href="hello" tabindex="0">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section owners-section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 pr-0">
                                    <div className="owner-blk">
                                        <div className="fig-blk">
                                            <img className="img-fluid" src="./img/ceo1.png" alt="img" />
                                        </div>
                                        <div className="img-content" data-aos="fade-up" data-aos-duration="400">
                                            <div className="name-designation">
                                                <h5>Mr. Richard Parker</h5>
                                                <p className="designation">CEO at Clark BEE</p>
                                            </div>
                                            <p className="p14">Dev Story has been a great journey for  me dummy text of the printing and typesetting industry Lorem Ipsum has Dev Story has been a great journey for  me dummy text of the printing and typesetting industry </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-0">
                                    <div className="owner-blk">
                                        <div className="fig-blk">
                                            <img className="img-fluid" src='./img/ceo2.png' alt="img" />
                                        </div>
                                        <div className="img-content" data-aos="fade-up" data-aos-duration="800">
                                            <div className="name-designation">
                                                <h5>Mr. Richard Parker</h5>
                                                <p className="designation">CEO at Clark BEE</p>
                                            </div>
                                            <p className="p14">Dev Story has been a great journey for  me dummy text of the printing and typesetting industry Lorem Ipsum has Dev Story has been a great journey for  me dummy text of the printing and typesetting industry </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section estimation-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="fig-blk">

                                        <img className="img-fluid" src='./img/estimate-img.png' alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="heading-grp main-heading-spacing text-right">
                                        <h2 className="mb-0">Worried about cost<span className="yellow-color">?</span></h2>
                                        <h2 className="mb-5">Get free estimation<span className="yellow-color">.</span></h2>
                                        <p className="p14-dark text-right" data-aos="fade-up" data-aos-duration="400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and </p>
                                        <ul className="ul-style bullets-right mt-5" data-aos="fade-up" data-aos-duration="400">
                                            <li>Requirement Gathering</li>
                                            <li>Graphics & UI/UX Designing</li>
                                            <li>Mobile / Web Development</li>
                                            <li>Deployment</li>
                                        </ul>
                                        <div className="mt-5 mr-4 text-right btn-blk">
                                            <a className="learn-more-btn" href="hello" tabindex="0">Get Estimation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>

                           </div>
        )
    }
}
