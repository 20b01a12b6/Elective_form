import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Report.css"




export default function Totalreport() {
 const [data1,setData]=useState([]);
 const [data2,setData2]=useState([]);
 

 useEffect(()=>{
    axios.get("http://localhost:3001/report1").then((response)=>{
        setData(response.data)
        console.log(response.data)
 })
 },[])
 useEffect(()=>{
    axios.get("http://localhost:3001/report").then((response)=>{
        setData2(response.data)
        console.log(response.data)
 })
 },[])
 return (
    <div className='tab'>
        <h1 style={{color:"pink",textAlign:"center"}}>CSE</h1>
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
<h1 style={{color:"pink",textAlign:"center"}}>IT</h1>
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
        data2.map((x1)=>{
            return (
                <tr>
                    <td>
                        {x1.sid1}
                    </td>
                    <td>
                        {x1.sname1}
                    </td>
                    <td>
                        {x1.mail}
                    </td>
                    <td>
                        {x1.phno}
                    </td>
                    <td>
                        {x1.Es1}
                    </td>
                    <td>
                        {x1.Es2}
                    </td>
                </tr>
            )
        })
    }
  </tbody>
</table>

  </div>)
}