import { useRef} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";

function Login(){
    let username=useRef(null);
    let password=useRef(null);
    let dispath=useDispatch();
    let navigate=useNavigate();
    let LoginCheck=()=>{
        if(username.current.value==="teja" && password.current.value==="teja@123"){
            dispath(login(username.current.value))
            navigate('/home')
        }
        else{
            alert("your login is failed..!please check")
        }
    }
    
    return(
        <>
        <div className="login"> <label>username:</label>
        <input type="text" ref={username} />
        <br /><br />
        <label>password:</label>
        <input type="password" ref={password} />
        <button onClick={LoginCheck}>login</button>
        </div>
       
        </>
    )
}
export default Login;