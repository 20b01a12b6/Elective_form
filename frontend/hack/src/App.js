import React from 'react'
import It from './pages1/It'
import Cse from './pages1/Cse'
import Ece from './pages1/Ece'
import Eee from "./pages1/Eee"
import Mech from './pages1/Mech'
import Civil from './pages1/Civil'
import Aids from './pages1/Aids'
import Navbar from './Navbar/Navbar'
import Electiveformcse from './Electiveformcse'
import Totalreport from './Report/Totalreport'
import { Route,Routes } from 'react-router-dom'
import Home from './Home/Home'
import Electiveform from './Electiveform'
import Report from './Report/Report'
import Reportcse from './Report/Reportcse'

export default function App() {
  return (
    <>
    <Navbar/>
       <Routes>
    <Route path="hom" element={<Home/>}/>
    <Route path="it" element={<It/>}/>
    <Route path="cse" element={<Cse/>}/>
    <Route path="ece" element={<Ece/>}/>
    <Route path="eee" element={<Eee/>}/>
    <Route path="civil" element={<Civil/>}/>
    <Route path="mech" element={<Mech/>}/>
    <Route path="aids" element={<Aids/>}/>
    <Route path="it/eform" element={<Electiveform/>}/>
    <Route path="cse/eform" element={<Electiveformcse/>}/>
    <Route path="it/eform/report" element={<Report/>}/>
    <Route path="cse/eform/report1" element={<Reportcse/>}/>

     <Route path="total" element={<Totalreport/>}/>
    </Routes>
    
    </>
  )
}
