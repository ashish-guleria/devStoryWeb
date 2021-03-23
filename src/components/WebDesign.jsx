import React, { Component } from 'react'
import Footer from "../childComponents/Footer"
import Header from "../childComponents/Header"
import FocusContent from "../childComponents/FocusContent"


export default class WebDesign extends Component {
    render() {
        return (
            <div>

                <Header />
                <div id="wrapper">
                    <section className="section inner-page-banner">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 order-lg-2">
                                    <div className="fig-blk banner-img">
                                        <img className="img-fluid" src="img/banner02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-8 order-lg-1">
                                    <div className="heading-grp">
                                        <h2 className="mb-3" data-aos="fade-up" data-aos-duration={400}>Experience Innovative and <br /> Intuitive web designs<span className="yellow-color">.</span>
                                        </h2>
                                        <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section white-section ourdesign-section">
                        <div className="container">
                            <div className="out-container-left" data-aos="fade-right" data-aos-duration={300}>
                                <div className="fig-blk">
                                    <img className="img-fluid" src="img/our-design.png" alt="img" />
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
                    <section className="section unique-section section-padding-top section-padding-bottom text-center">
                        <div className="container">
                            <div className="heading-grp main-heading-spacing">
                                <h2 className="mb-3">Get Unique, visually appealing web designs.</h2>
                                <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-6">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={300}>
                                        <figure className="mb-0">
                                            <img src="img/php.png" alt="img" />
                                            <figcaption>PHP</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={600}>
                                        <figure className="mb-0">
                                            <img src="img/laravel.png" alt="img" />
                                            <figcaption>LARAVEL</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={900}>
                                        <figure className="mb-0">
                                            <img src="img/jquery.png" alt="img" />
                                            <figcaption>JQUERY</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={400}>
                                        <figure className="mb-0">
                                            <img src="img/js.png" alt="img" />
                                            <figcaption>JAVASCRIPT</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={800}>
                                        <figure className="mb-0">
                                            <img src="img/ps.png" alt="img" />
                                            <figcaption>PHOTOSHOP</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section white-section contact-form-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="heading-grp">
                                        <h2 className="mb-5">Got an idea for your own app? Share with us!</h2>
                                        <p className="p16 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the industry's standard.</p>
                                    </div>
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" name placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <select className="selectpicker">
                                                    <option>What is app about?</option>
                                                    <option>What is app about?</option>
                                                    <option>What is app about?</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <div className="btn-blk">
                                                    <button className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FocusContent />
                </div>
                <Footer />
            </div>
        )
    }
}
