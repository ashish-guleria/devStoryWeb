import React, { Component } from 'react'
import Header from "../childComponents/Header"


export default class Quotes extends Component {
    render() {
        return (
            <div>

               <Header/>
                <div id="wrapper">
                    <section className="platform platform1" id="section1">
                        <div className="platform-child">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="platform-heading">
                                            <h2>What kind of platform are you looking for?</h2>
                                            <h6>You may select multiple answers</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div1" id="platform-colom-text" onclick="changeActive('div1',1,
                  1,'section1')">
                                            <div className="inner-heading-grp">
                                                <h3>IOS</h3>
                                            </div>
                                            <figure>
                                                <img src="img/ios.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div2" id="platform-colom-text" onclick="changeActive('div2',1,
                  2,'section1')">
                                            <div className="inner-heading-grp">
                                                <h3>Android</h3>
                                            </div>
                                            <figure>
                                                <img src="img/Android2.png" alt="Android-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div3" id="platform-colom-text" onclick="changeActive('div3',1,
                  3,'section1')">
                                            <div className="inner-heading-grp">
                                                <h3>Website</h3>
                                            </div>
                                            <figure>
                                                <img src="img/Website.png" alt="Website-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer start here */}
                        <section className="min-footer">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                        <div className="footer-colom1">
                                            <ul>
                                                <li><a className="active" href="#section1" onclick="myFunction('section1')">PLATFORM</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                        <div className="footer-colom1 text-right">
                                            <button className="btn btn-success disabled" type="button">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* footer end here */}
                        {/*platform section end here  */}
                    </section>
                    {/*platform section two start here  */}
                    <section className="platform platform2" id="section2" style={{ display: 'none' }}>
                        <div className="platform-child1">
                            <div className="container">
                                <div className="row second">
                                    <div className="col-12">
                                        <div className="platform-heading">
                                            <h2>How kind of UI do you have in mind?</h2>
                                            <h6>You may select multiple answers</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div4" onclick="changeActive('div4',2,
                  4,'section2')">
                                            <div className="inner-heading-grp">
                                                <h3>0-7</h3>
                                                <p>Projects which includes social <br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/packing.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div5" onclick="changeActive('div5',2,
                  5,'section2')">
                                            <div className="inner-heading-grp">
                                                <h3>8-15</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/packing-(1).png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div6" onclick="changeActive('div6',2,
                  6,'section2')">
                                            <div className="inner-heading-grp">
                                                <h3>15+</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/packing-(2).png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer start here */}
                        <section className="min-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                        <div className="footer-colom1">
                                            <ul>
                                                <li><a href="#section1" onclick="myFunction('section1')">PLATFORM</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a className="active" href="#section2" onclick="myFunction('section2')">SCREENS</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                        <div className="footer-colom1 text-right">
                                            <button className="btn btn-danger disabled " type="button">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* footer end here */}
                    </section>
                    {/*platform section end here  */}
                    {/*platform-three section start here  */}
                    <section className="platform platform3" id="section3" style={{ display: 'none' }}>
                        <div className="platform-child2">
                            <div className="container">
                                <div className="row second">
                                    <div className="col-12">
                                        <div className="platform-heading">
                                            <h2>What type of project are you looking to create?</h2>
                                            <h6>You may select multiple answers</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div7" onclick="changeActive('div7',3,
                  7,'section3')">
                                            <div className="inner-heading-grp">
                                                <h3>Social</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/mix-location.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div8" onclick="changeActive('div8',3,
                  8,'section3')">
                                            <div className="inner-heading-grp">
                                                <h3>E-Commerce</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/ps-mix.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div9" onclick="changeActive('div9',3,
                  9,'section3')">
                                            <div className="inner-heading-grp">
                                                <h3>Travel and Local</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/travel.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="row second">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div10" onclick="changeActive('div10',3,
                  10,'section3')">
                                            <div className="inner-heading-grp">
                                                <h3>Dating</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/hug.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div11" onclick="changeActive('div11',3,
                  11,'section3')">
                                            <div className="inner-heading-grp">
                                                <h3>Food and Drink</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/beer.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div12" onclick="changeActive('div12',3,
                  12,'section3')">
                                            <div className="inner-heading-grp">
                                                <h3>Beauty</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/facial-treatment.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="row second">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div13" onclick="changeActive('div13',3,
                  13,'section3')">
                                            <div className="inner-heading-grp">
                                                <h3>Education</h3>
                                                <p>Projects which includes socialb<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/graduate.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div14" onclick="changeActive('div14',3,
                  14,'section3')">
                                            <div className="inner-heading-grp">
                                                <h3>Event</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/eye-mask.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div15" onclick="changeActive('div15',3,
                  15,'section3')">
                                            <div className="inner-heading-grp">
                                                <h3>Other</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/bicycle.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer start here */}
                        <section className="min-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                        <div className="footer-colom1">
                                            <ul>
                                                <li><a href="#section1" onclick="myFunction('section1')">PLATFORM</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section2" onclick="myFunction('section2')">SCREENS</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a className="active" href="#section3" onclick="myFunction('section3')">PROJECT TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                        <div className="footer-colom1 text-right">
                                            <button className="btn btn-warning disabled" type="button">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* footer end here */}
                    </section>
                    {/*platform-two section end here  */}
                    {/*platform section six start here  */}
                    <section className="platform platform4" id="section4" style={{ display: 'none' }}>
                        <div className="platform-child3">
                            <div className="container">
                                <div className="row second">
                                    <div className="col-12">
                                        <div className="platform-heading">
                                            <h2>What features are you looking in your project?</h2>
                                            <h6>You may select multiple answers</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div31" onclick="changeActive('div31',4,
                  16,'section4')">
                                            <div className="inner-heading-grp">
                                                <h3>MVP</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/avatar.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div32" onclick="changeActive('div32',4,
                  17,'section4')">
                                            <div className="inner-heading-grp">
                                                <h3>Average</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/boss.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div33" onclick="changeActive('div33',4,
                  18,'section4')">
                                            <div className="inner-heading-grp">
                                                <h3>Polished</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/businessman.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer start here */}
                        <section className="min-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                        <div className="footer-colom1">
                                            <ul>
                                                <li><a href="#section1" onclick="myFunction('section1')">PLATFORM</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section2" onclick="myFunction('section2')">SCREENS</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section3" onclick="myFunction('section3')">PROJECT TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a className="active" href="#section4" onclick="myFunction('section4')">UI TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                        <div className="footer-colom1 text-right">
                                            <button className="btn btn-info disabled" type="button">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* footer end here */}
                    </section>
                    {/*platform section end here  */}
                    {/*platform-seven section start here  */}
                    <section className="platform platform5" id="section5" style={{ display: 'none' }}>
                        <div className="platform-child4">
                            <div className="container">
                                <div className="row second">
                                    <div className="col-12">
                                        <div className="platform-heading">
                                            <h2>What roles your admin should aquire?</h2>
                                            <h6>You may select multiple answers</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div34" onclick="changeActive('div34',5,
                  19,'section5')">
                                            <div className="inner-heading-grp">
                                                <h3>Email and Password</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/arroba.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div35" onclick="changeActive('div35',5,
                  20,'section5')">
                                            <div className="inner-heading-grp">
                                                <h3>2 Step Authorisation</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/at-sign.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div36" onclick="changeActive('div36',5,
                  21,'section5')">
                                            <div className="inner-heading-grp">
                                                <h3>Facebook</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/facebook-(1).png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="row second">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div37" onclick="changeActive('div37',5,
                  22,'section5')">
                                            <div className="inner-heading-grp">
                                                <h3>Gmail</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/gmail-(1).png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div38" onclick="changeActive('div38',5,
                  23,'section5')">
                                            <div className="inner-heading-grp">
                                                <h3>Twitter</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/twitter-(1).png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div39" onclick="changeActive('div39',5,
                  24,'section5')">
                                            <div className="inner-heading-grp">
                                                <h3>Instagram</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/instagram.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="row second">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div40" onclick="changeActive('div40',5,
                  25,'section5')">
                                            <div className="inner-heading-grp">
                                                <h3>LinkedIn</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/linkedin-(1)-copy.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div41" onclick="changeActive('div41',5,
                  26,'section5')">
                                            <div className="inner-heading-grp">
                                                <h3>Github</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/github-copy.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div42" onclick="changeActive('div42',5,
                  27,'section5')">
                                            <div className="inner-heading-grp">
                                                <h3>No Login Required</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/no-entry.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer start here */}
                        <section className="min-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                        <div className="footer-colom1">
                                            <ul>
                                                <li><a href="#section1" onclick="myFunction('section1')">PLATFORM</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section2" onclick="myFunction('section2')">SCREENS</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section3" onclick="myFunction('section3')">PROJECT TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section4" onclick="myFunction('section4')">UI TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a className="active" href="#section5" onclick="myFunction('section5')">LOGIN TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                        <div className="footer-colom1 text-right">
                                            <button className="btn btn-link disabled" type="button">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div></section>
                        {/* footer end here */}
                    </section>
                    {/*platform-five section start here  */}
                    <section className="platform platform6" id="section6" style={{ display: 'none' }}>
                        <div className="platform-child5">
                            <div className="container">
                                <div className="row second">
                                    <div className="col-12">
                                        <div className="platform-heading">
                                            <h2>WWhat features are you looking in your project?</h2>
                                            <h6>You may select multiple answers</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div19" onclick="changeActive('div19',6,
                  28,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Activity Feeds</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/news-paper.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div20" onclick="changeActive('div20',6,
                  29,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Search and Filter</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/browser-(1).png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div21" onclick="changeActive('div21',6,
                  30,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>User Profile</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/id-card.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="row second">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div22" onclick="changeActive('div22',6,
                  31,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Ratings and Reviews</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/thumbs-up.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div23" onclick="changeActive('div23',6,
                  32,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Chats</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/chat-(1).png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div24" onclick="changeActive('div24',6,
                  33,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Social Sharing</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/network.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="row second">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div25" onclick="changeActive('div25',6,
                  34,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Maps and Navigation</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/map.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div26" onclick="changeActive('div26',6,
                  35,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Event and Calendar</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/event.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div27" onclick="changeActive('div27',6,
                  36,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Image and Audio/Video Processing</h3>
                                            </div>
                                            <figure>
                                                <img src="img/Group-4.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="row second">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div28" onclick="changeActive('div28,6,37','section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Shopping Cart</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/monitor.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div29" onclick="changeActive('div29',6,
                  38,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>In App Purchases</h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/online-shop-(1).png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div30" onclick="changeActive('div30',6,
                  39,'section6')">
                                            <div className="inner-heading-grp">
                                                <h3>Push Notifications</h3>
                                            </div>
                                            <figure>
                                                <img src="img/alarm-copy.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer start here */}
                        <section className="min-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                        <div className="footer-colom1">
                                            <ul>
                                                <li><a href="#section1" onclick="myFunction('section1')">PLATFORM</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section2" onclick="myFunction('section2')">SCREENS</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section3" onclick="myFunction('section3')">PROJECT TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section4" onclick="myFunction('section4')">UI TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section5" onclick="myFunction('section5')">LOGIN TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a className="active" href="#section6" onclick="myFunction('section6')">FEATURES</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                        <div className="footer-colom1 text-right">
                                            <button className="btn btn-default disabled" type="button">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* footer end here */}
                    </section>
                    {/*platform section end here  */}
                    {/*platform section four start here  */}
                    <section className="platform platform7" id="section7" style={{ display: 'none' }}>
                        <div className="platform-child6">
                            <div className="container">
                                <div className="row second">
                                    <div className="col-12">
                                        <div className="platform-heading">
                                            <h2>How many screens do you have in mind?</h2>
                                            <h6>You may select multiple answers</h6>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div16" onclick="changeActive('div16',7,
                  40,'section7')">
                                            <div className="inner-heading-grp">
                                                <h3>User Management</h3>
                                                <p>Projects which includes social<br />
                    services &amp; connections</p>
                                            </div>
                                            <figure>
                                                <img src="img/collaboration.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div17" onclick="changeActive('div17',7,
                  41,'section7')">
                                            <div className="inner-heading-grp">
                                                <h3>Content Management </h3>
                                                <p>Projects which includes online<br />
                    business</p>
                                            </div>
                                            <figure>
                                                <img src="img/editing.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="platform-colom1 div18" onclick="changeActive('div18',7,
                  42,'section7')">
                                            <div className="inner-heading-grp">
                                                <h3>Reports and Analytics</h3>
                                                <p>Projects including location &amp;<br />
                    travelling services</p>
                                            </div>
                                            <figure>
                                                <img src="img/analytics-copy-2.png" alt="ios-img" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer start here */}
                        <section className="min-footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                        <div className="footer-colom1">
                                            <ul>
                                                <li><a href="#section1" onclick="myFunction('section1')">PLATFORM</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section2" onclick="myFunction('section2')">SCREENS</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section3" onclick="myFunction('section3')">PROJECT TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section4" onclick="myFunction('section4')">UI TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section5" onclick="myFunction('section5')">LOGIN TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a href="#section6" onclick="myFunction('section6')">FEATURES</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                <li><a className="active" href="#section7" onclick="myFunction('section7')">ADMIN FEATURES</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                        <div className="footer-colom1 text-right">
                                            <button className="btn btn-primary disabled" type="button">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* footer end here */}
                    </section>
                    {/*platform section end here  */}
                    {/*platform section two start here  */}
                    <section className="platform platform8" id="section8" style={{ display: 'none' }}>
                        <form id="contact-form" className="form" action="https://www.aativa.com/get-quotes" method="POST" role="form">
                            <input type="hidden" name="_token" defaultValue="kg29jDTkVfxVSZRsmN1Onm2hUyW9872AOf8qfDcf" />
                            <input type="hidden" name="random" defaultValue="EDvQr2IXHt" />
                            <div className="platform-child7">
                                <div className="container">
                                    <div className="row second">
                                        <div className="col-12">
                                            <div className="platform-heading">
                                                <h2>Almost Done!</h2>
                                                <h6>Just fill in some details and your done.</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 mx-auto">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="name" />
                                                        <input type="text" className="form-control" id="form_name" required name="name" placeholder="Name" tabIndex={1} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="email" />
                                                        <input type="email" className="form-control" id="form_email" name="email" placeholder="Email" tabIndex={2} required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="subject" />
                                                        <input type="text" className="form-control" id="form_number" required name="number" placeholder="Phone Number" tabIndex={3} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="subject" />
                                                        <select className="form-control" name="country" required id="form_country">
                                                            <option>Country</option>
                                                            <option value="USA">USA (+1)</option>
                                                            <option value="UK">United Kingdom (+44)</option>
                                                            <option value="UAE">UAE (+971)</option>
                                                            <option value="Kuwait">Kuwait (+965)</option>
                                                            <option value="Australia">Australia (+61)</option>
                                                            <option value="France">France (+33)</option>
                                                            <option value="Singapore">Singapore (+65)</option>
                                                            <option value="Hong Kong">Hong Kong (+852)</option>
                                                            <option value="India">India (+91)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-message form-group">
                                                        <label className="form-label" htmlFor="message" />
                                                        <textarea rows={5} cols={50} name="message" className="form-control" id="form_message" placeholder="Message" tabIndex={4} required defaultValue={""} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* footer start here */}
                            <section className="min-footer">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                            <div className="footer-colom1">
                                                <ul>
                                                    <li><a href="#section1" onclick="myFunction('section1')">PLATFORM</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                    <li><a href="#section2" onclick="myFunction('section2')">SCREENS</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                    <li><a href="#section3" onclick="myFunction('section3')">PROJECT TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                    <li><a href="#section4" onclick="myFunction('section4')">UI TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                    <li><a href="#section5" onclick="myFunction('section5')">LOGIN TYPE</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                    <li><a href="#section6" onclick="myFunction('section6')">FEATURES</a><i className="fa fa-chevron-right" aria-hidden="true" /></li>
                                                    <li><a className="active" href="#section7" onclick="myFunction('section7')">ADMIN FEATURES</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                            <div className="footer-colom1 text-right">
                                                <button className="btn btn-link1 disabled" type="submit" value="submit" id="final">FINISH</button>
                                            </div>
                                        </div>
                                    </div>
                                </div></section>
                        </form>
                    </section>
                </div>

            </div>
        )
    }
}
