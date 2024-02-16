import React from 'react';
import "./footer.css"
import logo from "../assests/images/new_resume_logo2.png"
const Footer = () => {
  let isMobile = window.matchMedia("(max-width: 500px)").matches;
  return (<footer className={`${isMobile ? 'mb-bg mb-5' : " bg-img footer-area"}  `}>
    <div className={` ${!isMobile? 'footer-content-area spec':''}`}>
      <div className="container">
        <div className={`row ${isMobile? 'gap-7':'mt-5'}`}>
          <div className="col-12 col-lg-4 col-md-6">
            <div className="footer-copywrite-info">
              {/* Copywrite */}
              <div className={`d-flex flex-column justify-content-center align-items-start ${isMobile ? '' : 'ml-5'}`} data-wow-delay="0.2s">
                <div className="footer-logo">
                  <a href="#" className="d-flex justify-content-center align-items-center"><img src={logo} alt="logo" /> <span className="ml-1">Resume Builder</span></a>
                </div>
                <p className='p-0 text-white  text-start'>
                  Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.
                </p>
              </div>
              {/* Social Icon */}
              <div className={`fs-4 text-white d-flex gap-2  ${isMobile ? '' : 'ml-5'}`} data-wow-delay="0.4s">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="contact_info_area d-sm-flex justify-content-between">
              {/* Content Info */}
              <div className="contact_info mt-x text-center fadeInUp" data-wow-delay="0.3s">
                <h5>PRIVACY &amp; TOS</h5>
                <a href=""><p>Advertiser Agreement</p></a>
                <a href=""><p>Acceptable Use Policy</p></a>
                <a href=""><p>Privacy Policy</p></a>
                <a href=""><p>Technology Privacy</p></a>
                <a href=""><p>Developer Agreement</p></a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-2 col-md-6">
            {/* Content Info */}
            <div className="contact_info_area d-sm-flex justify-content-between">
              <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
                <h5>NAVIGATE</h5>
                <a href=""><p>Advertisers</p></a>
                <a href=""><p>Developers</p></a>
                <a href=""><p>Resources</p></a>
                <a href=""><p>Company</p></a>
                <a href=""><p>Connect</p></a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="contact_info_area d-sm-flex justify-content-between">
              {/* Content Info */}
              <div className="contact_info mt-s text-center fadeInUp" data-wow-delay="0.4s">
                <h5>CONTACT US</h5>
                <p>Mailing Address: xx00 E. Union Ave</p>
                <p>Suite 1100. Denver, CO 80237</p>
                <p>+999 90932 627</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>)
}

export default Footer;