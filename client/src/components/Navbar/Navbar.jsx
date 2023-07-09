import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../logo1.png'
import  search  from '../../magnifying-glass-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import './Navbar.css'

const Navbar = () => {
    var User = null
  return (
    <nav>
        <div className='navbar'>
            <Link to='/' className='nav-item-1 nav-logo'>
                <img src={logo} alt='logo' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>
                About
            </Link>
            <Link to='/' className='nav-item nav-btn'>
                Products
            </Link>
            <Link to='/' className='nav-item nav-btn'>
                For teams
            </Link>
            <form>
                <input type="text" placeholder='Search...'/>
                <img src={search} alt="search" width="18" className='search-icon'/>
            </form>
            {User === null ? 
            <Link to='/Auth' className='nav-item nav-links'>Login</Link> : 
            <>
                <Avatar backgroundColor='#009dff' px='10px' py='5px' borderRadius='50%' color='white'><Link to='/User' style={{color:"white",textDecoration:'none'}}>A</Link></Avatar>
                <button className='nav-item nav-links'>Log out</button>
            </>
            }
        </div>
    </nav>
  )
}

export default Navbar