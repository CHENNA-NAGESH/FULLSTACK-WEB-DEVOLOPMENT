import { useState } from "react";
import './style.css'
export default function LoginForm(){
    const [name, setName] = useState("");
    const [password, setName1] = useState("");
    function submit1(){
        alert("userName is:" + name + "\npassword is:" + password);
    }
    return(
       <center>
            <form>
                <p class='p1'>Login Page</p>
                <input type="text" value={name} placeholder="Username" onChange={(e)=>setName(e.target.value)} class='inp1'></input>
                <input type="password" value={password} placeholder="Password" onChange={(e)=>setName1(e.target.value)} class='inp1'></input>
                <button  onClick={submit1} class='btn'>login</button>
            </form>
        </center>
    );
}
