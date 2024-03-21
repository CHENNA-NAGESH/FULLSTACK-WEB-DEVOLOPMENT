import { useState } from "react";
import './style.css'
export default function SignupForm(){
    const [name, setName] = useState("");
    const [password, setName1] = useState("");
    const [email, setName2] = useState("");
    function submit1(){
        alert("userName is:" + name + "\npassword is:" + password);
    }
    return(
       <center><p class='p1'>Sign Up</p>
                <form>
                <input type="text" value={name} placeholder="Username" onChange={(e)=>setName(e.target.value)} class='inp1'></input>
                <input type="email" value={email} placeholder="Email" onChange={(e)=>setName2(e.target.value)} class='inp1'></input>
                <input type="password" value={password} placeholder="Password" onChange={(e)=>setName1(e.target.value)} class='inp1'></input>
                <button  onClick={submit1} class='btn'>Sign up</button>
        </form></center>
    );
}
