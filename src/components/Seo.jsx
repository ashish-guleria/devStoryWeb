import React, { Component } from 'react'
import Footer from "../commonComponents/Footer"
import Header from "../commonComponents/Header"
import FocusContent from "../commonComponents/FocusContent"
import Form from '../commonComponents/Form'


export default class Seo extends Component {
    render() {
        return (
            <div>
               <Header/>
                <div id="wrapper">
                    <section className="section inner-page-banner">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5 order-lg-2">
                                    <div className="fig-blk banner-img-6">
                                        <img className="img-fluid" src="img/banner06.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-7 order-lg-1">
                                    <div className="heading-grp">
                                        <h2 className="mb-3" data-aos="fade-up" data-aos-duration={400}>100%Safe, Ethical<br />
                and Effective<br />
                Search Results<span className="yellow-color">.</span>
                                        </h2>
                                        <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section white-section ourdesign-section">
                        <div className="container">
                            <div className="out-container-left" data-aos="fade-right" data-aos-duration={400}>
                                <div className="fig-blk">
                                    <img className="img-fluid" src="img/odr-confirmed.png" alt="img" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 ml-auto">
                                    <div className="heading-grp">
                                        <h2 className="mb-3">Our Design Process<span className="yellow-color">.</span></h2>
                                    </div>
                                    <p className="p16" data-aos="fade-up" data-aos-duration={400}>Our website designs are highly functional and easy to navigate to ensure that your target audiences can easily navigate through your website. We focus on the comforts and needs of the user, which results in an incredible user experience. We incorporate user-centric approach to create stunning and unique web designs. We believe greater work comes from understanding how the users feel and behave. With our team of professional designers and UI experts, we create insightful experiences for our clients.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section unique-section section-padding-top text-center">
                        <div className="container">
                            <div className="heading-grp">
                                <h2 className="mb-3">Get Unique, visually appealing web designs.</h2>
                                <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                            </div>
                        </div>
                        <div className="shape-grp">
                            <div className="yellow-shape-left"> <img src="img/yellow-shape-left.png" alt="img" /> </div>
                            <div className="yellow-shape-right"> <img src="img/yellow-shape-right.png" alt="img" /> </div>
                            <div className="shape-row first-shape-row">
                                <ul>
                                    <li>Intial-Analysis </li>
                                    <li className="sep"><i> <img src="img/arrow-right.png" alt="img" /> </i></li>
                                    <li>Advance Keyword<br /> Market Research</li>
                                    <li className="sep"><i> <img src="img/arrow-right.png" alt="img" /> </i></li>
                                    <li>Competitor<br /> Analysis</li>
                                </ul>
                            </div>
                            <div className="shape-row second-shape-row">
                                <ul>
                                    <li>Website and<br /> Content Optimisation</li>
                                    <li className="sep reverse-sep"><i> <img src="img/arrow-right.png" alt="img" /> </i></li>
                                    <li>Audits and<br /> Technical Techniques</li>
                                </ul>
                            </div>
                            <div className="shape-row third-shape-row">
                                <ul>
                                    <li>Analytics Testing<br /> and Maintenance</li>
                                    <li className="sep"><i> <img src="img/arrow-right.png" alt="img" /> </i></li>
                                    <li>Prevention<br /> and Recovery</li>
                                    <li className="sep"><i> <img src="img/arrow-right.png" alt="img" /> </i></li>
                                    <li>Social Login</li>
                                </ul>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </section>
                    
                    <section className="section white-section contact-form-center section-padding-top section-padding-bottom">
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="heading-grp text-center">
                                        <h2 className="mb-5">Got an idea for your own app? Share with us!</h2>
                                        <p className="p16 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the industry's standard.</p>
                                    </div>
                                  <Form/>
                                </div>
                            </div>
                        </div>
                    
                    </section>
                    <FocusContent/>
                </div>
                <Footer/>
                
                            </div>
        )
    }
}
