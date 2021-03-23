import React, { Component } from 'react'
import Footer from "../childComponents/Footer"
import Header from "../childComponents/Header"
import FocusContent from "../childComponents/FocusContent"


export default class Ui_ux extends Component {
    render() {
        return (
            <div>

                <Header/>
                <div id="wrapper">
                    <section className="section inner-page-banner">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5 order-lg-2">
                                    <div className="fig-blk banner-img-5">
                                        <img className="img-fluid" src="img/banner05.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-7 order-lg-1">
                                    <div className="heading-grp">
                                        <h2 className="mb-3" data-aos="fade-up" data-aos-duration={400}>
                                            Imagine creativity<br /> beyond your<br /> imagination
                                             <span className="yellow-color">.</span>
                                        </h2>
                                        <p className="p16-dark">By choosing the best services suitable for your story, we take things to next level</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="design-section section-padding-top section-padding-bottom  white-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="design-blk" data-aos="fade-up" data-aos-duration={200}>
                                                <figure className="black-border">
                                                    <span> <img src="img/ux-ux.png" alt="img" /></span>
                                                </figure>
                                                <figcaption>UI/UX</figcaption>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="design-blk" data-aos="fade-up" data-aos-duration={400}>
                                                <figure className="yellow-border">
                                                    <span> <img src="img/logo-design.png" alt="img" /></span>
                                                </figure>
                                                <figcaption>LOGOS</figcaption>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="design-blk" data-aos="fade-up" data-aos-duration={600}>
                                                <figure className="black-border">
                                                    <span> <img src="img/3d-graphic.png" alt="img" /></span>
                                                </figure>
                                                <figcaption>3D GRAPHICS</figcaption>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="design-blk" data-aos="fade-up" data-aos-duration={800}>
                                                <figure className="yellow-border">
                                                    <span> <img src="img/brochure.png" alt="img" /></span>
                                                </figure>
                                                <figcaption>BROCHURE</figcaption>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="design-blk" data-aos="fade-up" data-aos-duration={1000}>
                                                <figure className="black-border">
                                                    <span> <img src="img/catelogue.png" alt="img" /></span>
                                                </figure>
                                                <figcaption>CATALOGUE</figcaption>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7  mx-auto">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="design-blk" data-aos="fade-up" data-aos-duration={300}>
                                                <figure className="yellow-border">
                                                    <span> <img src="img/banner.png" alt="img" /></span>
                                                </figure>
                                                <figcaption>BANNER</figcaption>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="design-blk" data-aos="fade-up" data-aos-duration={600}>
                                                <figure className="black-border">
                                                    <span> <img src="img/flyer.png" alt="img" /></span>
                                                </figure>
                                                <figcaption>FLYER</figcaption>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="design-blk" data-aos="fade-up" data-aos-duration={900}>
                                                <figure className="yellow-border">
                                                    <span> <img src="img/bussiness-card.png" alt="img" /></span>
                                                </figure>
                                                <figcaption>BUSSINESS CARDS</figcaption>
                                            </div>
                                        </div>
                                    </div>
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
                                            <img src="img/ae.png" alt="img" />
                                            <figcaption className="text-uppercase">Adobe After Effects</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={600}>
                                        <figure className="mb-0">
                                            <img src="img/sketch.png" alt="img" />
                                            <figcaption className="text-uppercase">Sketch</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={900}>
                                        <figure className="mb-0">
                                            <img src="img/psd.png" alt="img" />
                                            <figcaption className="text-uppercase">Adobe Photoshop</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={400}>
                                        <figure className="mb-0">
                                            <img src="img/xd.png" alt="img" />
                                            <figcaption className="text-uppercase">Adobe experience design</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="logo-wrap" data-aos="fade-up" data-aos-duration={400}>
                                        <figure className="mb-0">
                                            <img src="img/ai.png" alt="img" />
                                            <figcaption className="text-uppercase">Adobe Illustrator</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
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
                                                <div className="btn-blk text-center">
                                                    <button className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
