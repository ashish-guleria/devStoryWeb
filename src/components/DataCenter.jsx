import React, { Component } from 'react'
import Footer from "../commonComponents/Footer"
import Header from "../commonComponents/Header"
import FocusContent from "../commonComponents/FocusContent"
import Form from '../commonComponents/Form'


export default class DataCenter extends Component {
    render() {
        return (

            <div>
                <Header/>
                <div id="wrapper">
                    <section className="section inner-page-banner overflow-hidden">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5 order-lg-2">
                                    <div className="fig-blk banner-img-7">
                                        <img className="img-fluid" src="img/banner07.png" alt="img" />
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
                    <section className="section white-section section-padding-top">
                        <div className="container">
                            <div className="heading-grp text-center">
                                <h2 className="mb-3">Our Datacenters</h2>
                            </div>
                            <div className="map-blk">
                                <img className="img-fluid" src="img/world-map.png" alt="img" />
                                <span className="storage-icon">
                                    <img src="img/storage-icon.png" alt="img" />
                                </span>
                                <span className="dark-dot dd01" />
                                <span className="dark-dot dd02" />
                                <span className="dark-dot dd03" />
                                <span className="dark-dot dd04" />
                            </div>
                        </div>
                    </section>
                    <section className="section unique-section section-padding-top section-padding-bottom text-center">
                        <div className="container">
                            <div className="heading-grp main-heading-spacing">
                                <h2 className="mb-3">Get Unique, visually appealing web designs.</h2>
                                <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={300}>
                                        <figure className="mb-0">
                                            <img src="img/s1.png" alt="img" />
                                            <figcaption>VPS/DEDICATED SERVER</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={600}>
                                        <figure className="mb-0">
                                            <img src="img/s2.png" alt="img" />
                                            <figcaption>NETWORK AND ADMIN SYSTEM SUPPORT</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={900}>
                                        <figure className="mb-0">
                                            <img src="img/s3.png" alt="img" />
                                            <figcaption className="text-uppercase">Email Server</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={400}>
                                        <figure className="mb-0">
                                            <img src="img/s4.png" alt="img" />
                                            <figcaption className="text-uppercase">Web Hosting</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={400}>
                                        <figure className="mb-0">
                                            <img src="img/s5.png" alt="img" />
                                            <figcaption>Firewall</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div></section>
                        
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
