import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo from '../../Images/logo.svg';
import googleIcon from '../../Images/googleIcon.png';
import './Login.css';

firebase.initializeApp(firebaseConfig);//firebase initialization

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //consume userContext created in App.js

    const provider = new GoogleAuthProvider();//Create an instance of the Google provider object
    const auth = getAuth();

    //Set logged in user in state. Initial state when not logged in
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: ""
    });

    //Set error in state. Initial state an empty object
    const [error, setError] = useState({});

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user; // The signed-in user object info.
                console.log('login successfully', user);
                const email = user.email;
                const name = user.displayName;
                const signedInUser = {
                    isSignedIn: true,
                    name: name,
                    email: email
                }
                setUser(signedInUser); //set user in the state
                setLoggedInUser(signedInUser); //context e loggedInUser set 
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(setError);
                setError({ errorMessage }); //set state to show the error message
            });
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then((res) => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: "",
                    email: ""
                }
                setUser(signedOutUser);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(setError);
                setError({ errorMessage }); //set state to show the error message
            })
    }

    return (
        <div className="container">
            <div className="mt-5">
                <Link to="/home">
                    <Button style={{ backgroundColor: "#EA6077", border: "none", fontWeight: "500" }}>Go Back</Button>
                </Link>
            </div>
            <div className="text-center">
                <Link to="/home">
                    <img src={logo} alt="logo" className="text-center" style={{ width: "200px" }} />
                </Link>
            </div>
            <div className="login-box col-md-6 offset-md-3">
                {
                    user.isSignedIn ?
                        <h4 className="font-weight-bold text-center">Sign Out</h4>
                        :
                        <h4 className="font-weight-bold text-center">Login With</h4>
                }
                {
                    user.isSignedIn ?
                        <button className="my-3" onClick={handleGoogleSignOut}><img src={googleIcon} alt="google-icon" /> Sign out</button>
                        :
                        <button className="my-3" onClick={handleGoogleSignIn}><img src={googleIcon} alt="google-icon" /> Continue with Google</button>
                }

                <p className="text-center">Don’t have an account?
                    <a target="blank" href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"> Create an account</a>
                </p>
                <p style={{ color: 'red' }}> {error.errorMessage}</p>
            </div>
        </div>
    );
};

export default Login;