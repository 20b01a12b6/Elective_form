import { useState } from "react"
import './Login.css';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Electiveform from "../Electiveform"
const Login = () => {
    const [sid,setname]=useState("")
    const [sname,setpass]=useState("")
    const [status,setstatus]=useState("")
    let navigate=useNavigate();
    // const [ch,setch]=useState(true)
    const onchange=(event)=>{

        if(event.target.name==='sid1')
        {
        setname(event.target.value)
        
        }
        if(event.target.name==='sname1')
        {
        setpass(event.target.value)
        
        }
    }
    const click=(event)=>
    {
      event.preventDefault()
        axios.post('http://localhost:3001/login',{sid:sid,
      sname:sname}).then((res)=>{
        if (res.data.message){
          toast.error("invalid")
          setname("")
          setpass("")
        }
        else{
         navigate("./eform")
          toast.success("login success")
          console.log("ok!")
          setname("")
          setpass("")
          
          
        }
        // console.log("success")
        //   toast.warning("login success")
        //   alert("successfull")
      })
    }
    return ( 
      <div className="lo">
        <div className="pi">
        <form onSubmit={click}>
        <h1 className="z">Login</h1>
    <label><h3>username</h3></label>
    
    <br/>
    <div className="ui input large focus">
  <input type="text" placeholder="Search..." size={40} value={sid} onChange={onchange}name="sid1"/>
</div>
<br/>
    <br/>
<label><h3>password</h3></label>
<br/>
    
    <div className="ui input large focus">
  <input type="password" placeholder="Search..." size={40} value={sname} onChange={onchange}name="sname1"/>
</div>
<br/>
    <br/>
<button className="ui toggle button"onClick={onchange}>Submit</button>
<h1>{status}</h1>
</form>
<ToastContainer
/>
</div>
</div>
);
}
 
export default Login;