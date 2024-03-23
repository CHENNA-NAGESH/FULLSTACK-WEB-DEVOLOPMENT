import { useState } from "react";
export default function LoginForm(){
    const [name, setName] = useState("");
    const [password, setName1] = useState("");
    function submit1(){
        alert("userName is:" + name + "\npassword is:" + password);
    }
    return(
       <center> <form>
            <label>Enter your name:
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </label><br></br><br></br>
            <label>Enter password:
                <input type="password" value={password} onChange={(e)=>setName1(e.target.value)}></input><br></br><br></br>
                <button  onClick={submit1}>login</button>
            </label>
        </form></center>
    );
}
