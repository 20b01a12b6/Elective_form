import { useForm} from "react-hook-form";
import { useState } from "react";

import "./Electiveform.css"
import axios from "axios";
import { Dropdown } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";
const Electiveform=()=>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const [subject1,setsubject1]=useState("")
const [subject2,setsubject2]=useState("")
  const onSubmit=(data)=>{
    console.log(data)
axios.post("http://localhost:3001/eform",
{
userName:data.userName,
name1:data.name1,
email:data.email,
phone:data.phone,
subject1:subject1,
subject2:subject2
}).then(()=>{
  alert("inserted Sucessfully")
  console.log("inserted")
})
}


console.log(subject1,subject2)

  console.log(errors);
 
  const handleDropFilterFruit = (e: any, data?: any) => {
    if (data.value.length <= MAX_FRUITS_SELECTION) {
      setsubjectId(data.value);
      // console.log(data.value)
      setsubject1(data.value[0])
      setsubject2(data.value[1])
    }
    
  };
  const MAX_FRUITS_SELECTION = 2;

  
    const [subjectId, setsubjectId] = useState([]);
    const navigate=useNavigate();
  
  
    const optionsSubjectsFake = [
      { key: 1, value: "machine learning", text: "machine learning" },
      { key: 2, value: "deep Learning", text: "deep Learning" },
      { key: 3, value: "Artificial intelligence", text: "Artificial intelligence" },
      { key: 4, value: "Ruby" , text: "Ruby"},
      { key: 5, value: "Block chain", text: "Block chain"},
      { key: 6, value: "Cyber Security", text: "Cyber Security" }
    ];

const Report=()=>{
  navigate('./report')
}

  return (
  
    <div className="App1">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="formm">
        <h2>Elective Form IT</h2>
        <input className="inputt" name="username"
          {...register("userName", {
            required: "Username is Required...",
            maxLength: {
              value: 10,
              message: "Username must be atmost 10 characters long...",
            },
          })}
          type="text"
          placeholder="username"
        />
        <p className="pp">{errors.userName?.message}</p>
        <input className="inputt" name="Name"
          {...register("name1", {
            required: "Name is Required...",
           
          })}
          type="text"
          placeholder="Name"
        />
        <p className="pp">{errors.name1?.message}</p>
        <input className="inputt" name="mail"
          {...register("email", {
            required: "Email is Required...",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email must be valid",
            },
          })}
          type="email"
          placeholder="Email"
        />
        <p className="pp">{errors.email?.message}</p>
       
        <input className="inputt" name="phnum"
          {...register("phone", {
            required: "phone number is Required...",
            pattern: {
             value:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
              message: "phone number must be valid",
            },
          })}
          type="text"
          placeholder="phone number"
        />
        <p className="pp">{errors.phone?.message}</p>

       

     <Dropdown
      placeholder="Select 2 Subjects:"
      onChange={handleDropFilterFruit}
      value={subjectId}
      fluid
      multiple
      selectOnNavigation={false}
      search
      selection
      options={optionsSubjectsFake}
    />
<br />
<br />
        <input type="submit"/>
      </form>
      <div>
        <br/>
        <br/>
        <button className="btn" onClick={Report}>IT BATCH REPORT</button>
      </div>
    </div>
    
  );
}

export default Electiveform ;