import "./login.css"
import { useContext, useRef } from "react";
import {loginCall} from "../../APICalls"
import {AuthContext} from "../../context/AuthContext"
import {CircularProgress} from "@material-ui/core"
import { Link } from "react-router-dom";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault(); //to prevent refreshing
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }
    console.log(user)
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">BRIDGES</h3>
                    <span className="loginDesc">
                        Connect with friends and the world aroud you on BRIDGES
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit = {handleClick}>
                        <input placeholder="Email" type = "email"  
                            required className="loginInput" ref={email} />
                        <input placeholder="Password" 
                            type ="password" 
                            required minLength = "8" 
                            className="loginInput" ref={password} />
                        <button className="loginButton" disabled={isFetching}>{isFetching 
                            ? <CircularProgress color="white" size = "25px"/>  
                            : "Log In"}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>

                    </form>
                    <Link to="/Register" style= {{textDecoration : "none"}}>
                        <div className="loginBox2">
                            <button className="loginRegisterButton">{isFetching 
                                ? <CircularProgress color="white" size = "25px"/>  
                                : "Create an account"}
                            </button>
                        </div>    
                    </Link>
                    

                </div>

            </div>
        </div>
    )
}
