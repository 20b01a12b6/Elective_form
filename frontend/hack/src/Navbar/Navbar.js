import React from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
    const change=({isActive})=>{
        return {
            color:isActive?'yellow':'white'
        }
    }
  return (
    <div className='nv'>
      <NavLink className="lin" style={change} to="hom"> Home</NavLink>
      <NavLink className="lin" style={change} to="it">IT</NavLink>
      <NavLink className="lin"style={change} to="cse">CSE</NavLink>
      <NavLink className="lin" style={change} to="ece">ECE</NavLink>
      <NavLink className="lin" style={change} to="eee">EEE</NavLink>
      <NavLink className="lin" style={change} to="civil">CIVIL</NavLink>
      <NavLink className="lin" style={change} to="mech">Mechanical</NavLink>
      <NavLink className="lin" style={change} to="aids">AIDS</NavLink>
      <NavLink className="lin" style={change} to="total">Total Report</NavLink>

    </div>
  )
}