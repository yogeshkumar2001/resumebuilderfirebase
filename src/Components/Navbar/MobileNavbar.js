import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserLoggedIn } from '../../Redux/action';
import './Navbar.css';

function Navbar(props) {
    function userLogOut() {
        props.setUserLoggedIn({ auth: false, id: null, name: null, email: null });
    }

    let loggedInNavbar = (
        <>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/template">Templates</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/login">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/login">Sign Up</a>
            </li>
        </>
    );

    let loggedOutNavbar = (
        <>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/template">Templates</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/profile">Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="/" onClick={userLogOut}>Log Out</a>
            </li>
        </>
    );

    return (
        <nav className="navbar   ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Resume Builder
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {props.userAuth.auth ? loggedOutNavbar : loggedInNavbar}
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function mapStateToProps(state) {
    return { userAuth: state.userLoggedIn };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setUserLoggedIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);