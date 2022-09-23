import React from 'react';
import Logo from '../images/Logo.png'
import './Home.css'

const Home = () => {
    return (

        <div className='im'>
            <div className='svecwlogo'>
                <img src={Logo}/>
            </div>
            <div className="container">

  <h2 className="title">
    <span className="title-word title-word-1">Students  </span>
    <span className="title-word title-word-2">Electives</span>
    <span className="title-word title-word-3">&nbsp;(3 -</span>
    <span className="title-word title-word-4">2)</span>
  </h2>
</div>
        </div>
    );
};

export default Home;
