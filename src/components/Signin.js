import React, { useState } from "react";
import { Link } from "react-router-dom";

// import "./Signup.css"; // Import the CSS file for styling

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform signup logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div style={{background: "linear-gradient(to right, #ee9ca7, #ffdde1)",display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <form style={{background: "#ffdde1"}} className="tc dib br4 pa5 ma4 shadow-5" onSubmit={handleSubmit}>
            <h1 className="flex justify-center">LOGIN ≽^•⩊•^≼</h1>
                <p>Please enter the following details.</p>
                <div className="pa2">
                    <input 
                    className="pa3 br3 grow"
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange} />
                </div>
                <br />
                <div className="pa2">
                    <input type="password" 
                    className="pa3 br3 grow"
                    placeholder="Enter your password"
                    value={password} 
                    onChange={handlePasswordChange} />
                </div>
                <br />
                <Link to="/calendar" ><button className="br3 pa2 ph3 pointer grow" type="submit">Sign In</button> </Link>
                <p>Don't have an account?</p>
                <a href="/signup" style={{color: '#ee9ca7', textDecoration: 'none', padding: '10px'}}>Sign up here</a>
            </form>
        </div>
    );
}

export default Signin;