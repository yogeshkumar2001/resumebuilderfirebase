import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import check from '../assests/images/check.png';
import cv from '../assests/images/cv.png';
import d1 from '../assests/images/d1.png';
import d2 from '../assests/images/d2.png';
import d3 from '../assests/images/d3.png';
import Footer from '../Footer/Footer';
import banner from "../assests/images/banner2.png"
const About = () => {
    const ServiceItem = ({ iconSrc, title, description, delay }) => (
        <div className="col-12 col-sm-6 col-lg-4">
            <div
                className={`service_single_content text-center mb-100 wow fadeInUp`}
                data-wow-delay={delay}
            >
                <div className="service_icon">
                    <img src={iconSrc} alt="" />
                </div>
                <h6 style={{ "color": "#13287e" }}>  {title}</h6>
                <p style={{ "color": "#8888a7" }}> {description}</p>
            </div>
        </div>
    );
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    return (
        <div class="container">
            <div class="container text-center">
                <div class={`${isMobile ? '' : 'row'} align-items-start p-0 text-start whoWe-section`}>
                    <div className={`${isMobile ? '': 'p-5 pl-3 '} col`}>
                        <div className="dream-dots">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h4 >We Deliver The Best</h4>

                        <div className="side-feature-list-item">
                            <img src={check} className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Proven CV Templates to increase Hiring Chance</div>
                        </div>
                        <div className="side-feature-list-item">
                            <img src={check} className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Creative and Clean Templates Design</div>
                        </div><div className="side-feature-list-item">
                            <img src={check} className="check-mark-icon" alt="" />
                            <div className="foot-c-info">We prioritize excellence as our standard</div>
                        </div><div className="side-feature-list-item">
                            <img src={check} className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Our CV templates are proven to increase hiring chances</div>
                        </div><div className="side-feature-list-item">
                            <img src={check} className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Free to use. Developed by hiring professionals.</div>
                        </div><div className="side-feature-list-item">
                            <img src={check} className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Fast Easy CV and Resume Formatting</div>
                        </div>
                        <div className="side-feature-list-item">
                            <img src={check} className="check-mark-icon" alt="" />
                            <div className="foot-c-info">Recruiter Approved Phrases.</div>
                        </div>
                        {/* Add more side-feature-list-items as needed */}
                    </div>
                    <div class="col"><img src={cv} alt="" class="w-100" /></div>
                </div>
                <div class="row">
                    <div className="col">
                        <div className="services-block-four">
                            <div className="inner-box">
                                <div className="icon-img-box h-100 d-flex align-items-center justify-content-center">
                                    <img src={d1} alt="" />
                                </div>
                                <h3 className='text-start'> Easy Online Resume Builder</h3>
                                <div className="text-start">Provides a user-friendly interface for creating resumes.</div>
                            </div>
                        </div>
                        <div className="services-block-four">
                            <div className="inner-box">
                                <div className="icon-img-box h-100 d-flex align-items-center justify-content-center">
                                    <img src={d2} alt="" />
                                </div>
                                <h3 className='text-start'> Step By Step Expert Tips</h3>
                                <div className="text-start">Facilitates step-by-step progression towards a polished final product.</div>
                            </div>
                        </div>
                        <div className="services-block-four">
                            <div className="inner-box">
                                <div className="icon-img-box h-100 d-flex align-items-center justify-content-center">
                                    <img src={d3} alt="" />
                                </div>
                                <h3 className='text-start'>
                                    Recruiter Approved Phrases</h3>
                                <div className="text-start">Incorporates language endorsed by recruiting professionals.</div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="pt-0 mt-s p-10 pl-2 text-start">
                            <div className="dream-dots">
                                <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                            </div>
                            <h4 style={{ fontSize: "2.5rem" }}>Why Choose Our Platform?</h4>
                            <p className="contant-p">Choosing the right platform for your job search is crucial, and here's why our platform is the perfect choice. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <p className="contant-p">We provide you with the tools and resources you need to succeed in today's competitive job market. Whether you're a seasoned professional or just starting your career journey.</p>
                            <Link className="btn dream-btn mt-30" to="/template">Let's build your CV</Link>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <ServiceItem
                        iconSrc="/c1.png"
                        title="Proven CV Templates to increase Hiring Chance"
                        description=" Elevate your chances of success with our proven CV templates. Carefully crafted to meet industry standards, these templates are designed to showcase your qualifications."
                        delay="0.2s"
                    />
                    <ServiceItem
                        iconSrc="/c2.png"
                        title="Creative, Modern and Clean Templates Designs"
                        description=" Stand out from the crowd with our creative, modern, and clean templates. Our designs are tailored to reflect your professionalism and personality."
                        delay="0.3s"
                    />
                    <ServiceItem
                        iconSrc="/c3.png"
                        title="Easy and Intuitive Online CV and Resume Builder"
                        description=" Crafting a compelling resume is now easier than ever with our intuitive online CV and resume builder. Navigate through the process effortlessly, and create a professional document."
                        delay="0.4s"
                    />

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;

