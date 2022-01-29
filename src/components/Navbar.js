import React, {useState} from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import {Link} from 'react-scroll'
import './Navbar.css'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
       <header>
           <nav class="navbar navbar-expand-md sticky-top">
  <div class="container-fluid">
  
    <Link className='navbar-brand' to='hero' spy={true} smooth={true} duration={250} >Chain<span>Pal</span></Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Hamburger color='#000' toggled={isOpen} toggle={setOpen} />
        </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <li><Link className='list' to='hero' spy={true} smooth={true} duration={250} >Home</Link></li>  
              </li>
        <li class="nav-item">
        <Link className='list' to="featured" spy={true} smooth={true} offset={50} duration={500} >Features</Link> 
               </li>    
        <li class="nav-item">
        <Link className='list' to="sign" spy={true} smooth={true} offset={50} duration={500} >Earn</Link>
        </li>   
        <li class="nav-item">
        <Link className='list' to="footer" spy={true} smooth={true} offset={50} duration={500} >Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
       </header>
    )
}

export default Navbar
