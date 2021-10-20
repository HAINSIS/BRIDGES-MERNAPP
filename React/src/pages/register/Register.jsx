import { useRef } from "react";
import "./register.css";
import axios from "axios"; 
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
 
export default function Register() {
    const username= useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory()

    const handleClick = async (e) => {
        e.preventDefault(); //to prevent refreshing
        if (passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("passwords don't match!!")
        }else{
            const user = {
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,
            };
            try{
                await axios.post("/auth/register", user)
                history.push("/login");
                
            }catch(err){
                console.log(err)
            }
        }
    }
    

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">BRIDGES</h3>
                    <span className="loginDesc">Connectwith friends and the world aroud you on BRIDGES</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit = {handleClick}>
                        <input 
                            placeholder="username" 
                            className="loginInput"
                            required
                            ref={username} 
                        />
                        <input 
                            placeholder="Email" 
                            className="loginInput"
                            required
                            ref={email}
                            type = "email"
                        />
                        <input 
                            placeholder="Password" 
                            className="loginInput"
                            required
                            ref={password}
                            type ="password"
                            minLength = "8"
                            />
                        <input 
                            placeholder="PasswordAgain" 
                            className="loginInput"
                            ref = {passwordAgain}
                            required
                            type = "password" />
                        <button className="loginButton" type="submit">Sign Up</button>
                    </form>
                    <Link to="/login" style= {{textDecoration : "none"}}>
                        <div className="loginBox2">
                            <button className="loginRegisterButton">Log in into an account</button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
