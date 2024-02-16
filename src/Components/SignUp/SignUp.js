import React, { useState } from 'react'
import { postCallAPI } from '../API/helper';
import { createUser } from '../API/ApiPaths';
import { connect } from 'react-redux';
import { setUserLoggedIn } from "../../Redux/action.js";
import { bindActionCreators } from "redux";
import { googleUserVerify } from "../API/ApiPaths.js";
// import "./signup.css"
import { notify } from "../Notify/notify.js"
import { GoogleLogin } from '@react-oauth/google';
import { GAUTH_CLIENT_ID } from "../../config.js"
import logoImage from "../assests/images/new_resume_logo.png"
function SignUp(props) {

    async function saveFormData(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let formDatObj = {};
        formData.forEach((val, key) => {
            formDatObj[key] = val;
        })
        if (formDatObj.password != formDatObj.confirmPassword){
            notify("passwords not matched","warning")
            return;
        }
        let responseData = await callAPICustom(formDatObj);
        console.log(responseData)
        if ( responseData.status == 201) {
            props.setUserLoggedIn({ auth: true, id: responseData.data["_id"], name: responseData.data.name, email: responseData.data.email })
            window.location = "/"
        } else {
            // setError("Please check your email or passowrd.").
            notify("Please check your email or passowrd.", "error")
        }
    }
    async function callAPICustom(data) {
        let response = await postCallAPI({ path: createUser, Data: data });
        return response;
    }
    async function callAPI(token) {
        try {
            let res = await postCallAPI({
                path: googleUserVerify, Data: {
                    idToken: token
                }
            });
            if (res) {
                return res;
            }
        } catch (error) {
            return error
        }
    }

    const onSuccessHandler = async (res) => {
        let userdataObj = await callAPI(res.credential);
        if (userdataObj.message == "Login user Successfully" && userdataObj.status == 200) {
            props.setUserLoggedIn({ auth: true, id: userdataObj.data["_id"], name: userdataObj.data.name, email: userdataObj.data.email })
            window.location = "/"
        } else {
            notify("Please check your email or passowrd.", "error")
        }
    }
    const onFailureHandler = (res) => {
        notify("Please check your email or passowrd.", "error")
    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="logo_container">
                    <img src={logoImage} alt="" />
                </div>
            <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Create an account
                    </p>
                    <form onSubmit={(e) => { saveFormData(e) }}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Your Username
                            </label>
                            <input
                                placeholder="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="username"
                                type="text"
                                name="name"
                                required
                            />
                        </div><div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Your Email
                            </label>
                            <input
                                placeholder="Email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="username"
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Password
                            </label>
                            <input
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                id="password"
                                type="password"
                                name="password"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Confirm password
                            </label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="••••••••"
                                name="confirmPassword"
                                id="confirmPassword"
                                type="password"
                                required
                            />
                        </div>
                        <div className="flex items-start mt-3">
                            <div className="flex items-center h-5">
                                <input
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                                    type="checkbox"
                                    aria-describedby="terms"
                                    id="terms"
                                    required
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="font-light text-gray-500 text-gray-300">
                                    I accept the
                                    <a
                                        href="#"
                                        className="font-medium text-primary-600 hover:underline text-primary-500 ml-1"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                        </div>

                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                            type="submit"
                        >
                            Create an account
                        </button>
                        <div className="separator">
                            <hr className="line" />
                            <span>Or</span>
                            <hr className="line" />
                        </div>
                        <div className="d-flex justify-content-center w-100">
                            <GoogleLogin
                                clientId={GAUTH_CLIENT_ID}
                                // buttonText="Login with Google"
                                onSuccess={onSuccessHandler}
                                onFailure={onFailureHandler}
                            // cookiePolicy={'single_host_origin'}
                            ></GoogleLogin>
                        </div>
                        <p className="note">Terms of use & Conditions</p>
                    </form>
                </div>
            </div>
        </div>
    )
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setUserLoggedIn
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(SignUp);