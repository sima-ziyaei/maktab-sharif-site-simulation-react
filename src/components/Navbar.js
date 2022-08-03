import {NavLink} from 'react-router-dom';
import '../styles/navbar.css';
import maktabLogo from '../assets/download.png'



export const Navbar = ()=>{

   
    return(
        <nav className='navbar'>
            <h2 className='title'>Maktab Sharif</h2>
            <div className='navLinks'>
            <NavLink to='/' > Home</NavLink>
            <NavLink to='about' > About Us </NavLink>
            <NavLink to='contactus' > Contact Us</NavLink>
            <NavLink to='bootcamps' > Boot Camps</NavLink>
            <NavLink to='contact' > Contact </NavLink>
            </div>
            <img src={maktabLogo} className='maktabLogo' alt='maktabLogo' />
        </nav>
    )
}