import React from 'react'
import { Link } from "react-router-dom";
import banner from "../assests/images/banner2.png"

import "./HomePage.css"
import Footer from '../Footer/Footer';
function HomePage() {
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
// alert(screen.width)
    return (
        <div class="home-page">
            <div class="container text-center">
                <div class={`${isMobile ? '' : 'row'} align-items-start p-0`}>
                    <div class={`col ${isMobile ? 'p-3' : 'p-5'}`}>
                        <h1 className="text-start fs-1 fw-bold" style={{ "color": "#13287e" }}>Online Resume Builder With Creative Templates</h1>
                        <p className="text-start fs-4" style={{ "color": "#8888a7" }}>Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</p>
                        <div class="row align-items-start justify-content-between">
                            <a href="/template" class="col btn btn-primary m-2">Choose Template</a>
                            <a href="/about" class="col btn btn-primary m-2">About us</a>
                        </div>
                    </div>
                    <div class="col"><img src={banner} alt="" class="w-100" /></div>
                </div>
                <div class="section-heading text-center mb-2">
                    <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s" >
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <h2 class="wow fadeInUp fs-1 text-bold fw-bold" data-wow-delay="0.3s" style={{ "color": "#13287e" }} >Our Main Features</h2>
                    <div className="d-flex justify-content-center">
                        <p class="wow fadeInUp fs-5" data-wow-delay="0.4s" style={{ "color": "#8888a7", maxWidth: "650px" }}>Experience the convenience of our online resume builder that simplifies the resume writing process. Our user-friendly platform ensures a seamless experience, allowing you to focus on presenting your skills and achievements effectively.</p>
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
                        description="  Stand out from the crowd with our creative, modern, and clean templates. Our designs are tailored to reflect your professionalism and personality helps to grow in career."
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

    )
}

export default HomePage