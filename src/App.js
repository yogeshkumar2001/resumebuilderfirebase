
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, redirect, createBrowserRouter, RouterProvider } from 'react-router-dom';
import WbAbout from './Components/About/About';
import About from './Components/About/About';
import Template from './Components/Template/Template';
import Details from './Components/forms/Details';
import Final from './Components/Final/Final';
import Profile from './Components/Profile/Profile';
import LogIn from './Components/Login/LogIn';
import SignUp from './Components/SignUp/SignUp';
import { useEffect } from 'react';
import { gapi } from "gapi-script";
import { GAUTH_CLIENT_ID } from "./config"
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ViewResume from './Components/ViewResume/ViewResume';
import SharedResume from './Components/SharedResume/SharedResume';
function App(props) {

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: GAUTH_CLIENT_ID,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })


  let router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/template",
      element: <Template />
    },{
      path: "/view-resume",
      element: <ViewResume />
    }, {
      path: "/details",
      element: <Details />
    }, {
      path: "/final",
      element: <Final />
    }, {
      path: "/profile",
      element: <Profile />
    }, {
      path: "/login",
      element: <LogIn />
    }, {
      path: "/signup",
      element: <SignUp />
    },{
      path: "/shared_resume",
      element: <SharedResume />
    }
  ])

  return (

    <div className="App">
      <Navbar></Navbar>
      {/* <nav style={{"--bs-breadcrumb-divider": "url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"}} aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav> */}
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}
function mapStateToProps(state) {
  return { userData: state.userLoggedIn }
}

export default connect(mapStateToProps, null)(App);
