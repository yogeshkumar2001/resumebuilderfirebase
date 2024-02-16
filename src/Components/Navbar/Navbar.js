import React from 'react'
import "./Navbar.css"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUserLoggedIn, increaseStep, setUserFormData, updateTemplateData } from '../../Redux/action'
import logoImage from "../assests/images/new_resume_logo2.png"

function Navbar(props) {

    function userLogOut(e) {
        e.preventDefault();
        // Clear Redux state
        props.updateTemplateData({ id: null, resumeId: null, path: null });
        props.setUserFormData(null);
        props.increaseStep({ value: 0 });
        props.setUserLoggedIn({ auth: false, id: null, name: null, email: null });
        window.location="/login"
    }
    let loggedInNavbar = (<>
        <li className="nav-item">
            <a className="nav-link text-primary " href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-primary" href="/about">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-primary" aria-current="page" href="/template">Templates</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-primary " href="/login">Login</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-primary " href="/signup">Sign Up</a>

        </li>
    </>)
    let loggedOutNavbar = (<>
        <li className="nav-item">
            <a className="nav-link text-primary " href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-primary" href="/about">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-primary" aria-current="page" href="/template">Templates</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-primary" href="/profile">Profile</a>
        </li>
        <li className="nav-item">
            <span className="nav-link text-primary " onClick={(e) => {
                userLogOut(e)
            }}>Log Out</span>
        </li>
    </>)
    function isMobile() {
        const userAgent = navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    }

    return (
        <>
            {isMobile() ? <nav nav className="navbar " >
                <div className="container-fluid">
                    <a className="navbar-brand text-primary d-flex align-items-center" href="/" >
                        <img src={logoImage} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                        Resume Builder
                    </a>
                    <button className="navbar-toggler text-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-primary"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-primary " tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Resume Builder</h5>
                            <button type="button" className="btn-close mr-1" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-circle-xmark fs-2"></i></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {props.userAuth.auth ? loggedOutNavbar : loggedInNavbar}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> : <div>
                <nav className="navbar navbar-expand-lg bg-body-white text-primary diaply-flex justify-content-between p-1">
                    <div className="">
                        <a className="navbar-brand text-primary d-flex align-items-center" href="/" >
                            <img src={logoImage} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                            <span>Resume Builder</span>
                        </a>
                    </div>
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className=" navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                {props.userAuth.auth ? loggedOutNavbar : loggedInNavbar}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            }
        </>
    )
}
function mapStateToProps(state) {
    return { userAuth: state.userLoggedIn };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setUserLoggedIn, increaseStep, setUserFormData, updateTemplateData
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)