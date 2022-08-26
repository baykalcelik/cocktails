import logo from '../logo.svg';
import './navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <div className="navbarCover">
            <Link className="" to="/"><img className="logoImg" src={logo} alt="logo" /></Link> 
            
            {/* <img className="logoImg" src={logo} alt="logo" /> */}

            <ul className='menuList'>
                <li> <Link className="navanchors" to="/">Home</Link> </li>
                <li> <Link className="navanchors" to="/about">About</Link> </li>
            </ul>

        </div>

    )
}