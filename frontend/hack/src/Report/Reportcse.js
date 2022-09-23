import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Report.css"
// import {confirmAlert} from 'react-confirm-alert'
// import 'react-confirm-alert/src/react-confirm-alert.css';



export default function Reportcse() {
 const [data1,setData]=useState([]);
 
 

 useEffect(()=>{
    axios.get("http://localhost:3001/report1").then((response)=>{
        setData(response.data)
        console.log(response.data)
 })
 },[])
 return (
    <div className='tab'>
        <table class="ui inverted pink table">
  <thead>
    <tr><th>Reg No</th>
    <th>Name</th>
    <th>Mail</th>
    <th>phone number</th>
    <th>elective1</th>
    <th>elective2</th>

  </tr></thead>
  <tbody>
    {
        data1.map((x)=>{
            return (
                <tr>
                    <td>
                        {x.sid1}
                    </td>
                    <td>
                        {x.sname1}
                    </td>
                    <td>
                        {x.mail}
                    </td>
                    <td>
                        {x.phno}
                    </td>
                    <td>
                        {x.Es1}
                    </td>
                    <td>
                        {x.Es2}
                    </td>
                </tr>
            )
        })
    }
  </tbody>
</table>

  </div>)
}