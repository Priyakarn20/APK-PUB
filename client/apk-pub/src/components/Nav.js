import React from 'react';
import "./Nav.css";
import {Link} from 'react-router-dom';

const Nav=()=> {
    return (
        <div className='box-container'>
            <ul className="nav-ul">
            <li><Link to='/'>APK Publication</Link></li>
            <li><Link to='/services'>Our Services</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/submit-articles'>Submit Journals</Link></li>
            <select id="journals" name="journals">
    <option value="all journals">All Journals</option>
    <option value="scopus journals">Scopus Journals</option>
    <option value="web of science">Web Of Science</option>
    <option value="google scholar">Google Scholar</option>
    <option value="schopus discontinued journals">Schopus Discontinued Journals</option>
  </select>
            <li><input className='nosubmit' type="search" placeholder=' Search Journals'></input></li>
            
            </ul>
        </div>
    )}
export default Nav;    
