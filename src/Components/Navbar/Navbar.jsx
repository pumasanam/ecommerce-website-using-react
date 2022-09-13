import React, {useState} from 'react';
import "./Navbar.scss"
import {Link} from 'react-router-dom';
import NavbarLogo from './../img/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import {GiCrossedPistols} from 'react-icons/gi'




const Navbar = () => {
    const [icon, setIcon] = useState(false);

    const ToggleEffect =()=>{
        setIcon(!icon);
    }



  return (
    <>
       <nav className='nav'>
            <Link to="/"><img src={NavbarLogo} style={{height:'80px',width:'80px', objectFit:'cover' }} alt="Logo" /></Link>

            <div className="nav_ul">
                <ul className={icon? 'ul active':'ul'}>
                    <li><Link className='nav_link' to="/">Home</Link></li>
                    <li><Link className='nav_link' to="/sellProducts">Sell Products</Link></li>
                    <li><Link className='nav_link' to="/login">Login</Link></li>
                    <li><Link className='nav_link' to="/MyProducts">My Products</Link></li>
                </ul>
            </div>

            <div className="icons" onClick={ToggleEffect}>
                {icon?<GiCrossedPistols style={{cursor:'pointer',backgroundColor:'white', fontSize:'2rem'}}/> : <GiHamburgerMenu style={{cursor:'pointer',backgroundColor:'white', fontSize:'2rem'}}/>}
            </div>
            
      </nav> 
      
    </>
  );
};

export default Navbar;
