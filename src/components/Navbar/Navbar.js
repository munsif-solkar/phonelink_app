import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import './nav.css'
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import MenuIcon from '../../images/menu.png'


const NavigationBar = (propsData) => {
  const { logo } = propsData.data;


  const [menuVisible, setMenuVisible] = useState(true)

  const toggleVisibility = () => {
    setMenuVisible(!menuVisible)

  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuVisible(true)
      } else {
        setMenuVisible(false)
      }
    }
    window.addEventListener('resize', handleResize);
  }, [])

  return (

    // <Navbar bg="white" variant="light" className='nav'>
    //   <Container>


    //     <Navbar.Brand href="/"><img src={logo} className='app-logo'/></Navbar.Brand>


    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <div className='navbar-collapse'>
    //       <nav>

    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/cart">Trendy Mobile Skins</Nav.Link>

    //         <NavDropdown
    //                 title="Popular categories"

    //               >
    //                 <NavDropdown.Item href="#action3">Anime</NavDropdown.Item>
    //                 <NavDropdown.Item href="#action4">
    //                   Marvel
    //                 </NavDropdown.Item>
    //                 <NavDropdown.Item href="#action5">
    //                   Aesthetic
    //                 </NavDropdown.Item>
    //               </NavDropdown>
    //       </nav>
    //       <div className='button-group'>
    //         <a href='#' id='login-btn'>Login</a>
    //         <a href='#' id='register-btn'>Register</a>
    //       </div>


    //     </div>

    //     <div className="nav-item-group">
    //     <Search/>


    //     </div>

    //   </Container>

    // </Navbar>





    <nav>
      <Container>
        <div className="nav-constants">
          <div className="brand-logo">
            <img src={logo} alt="logo" className='app-logo' />
          </div>


          <div className="menu-button">
            <img src={MenuIcon} className='icon-default' onClick={
              toggleVisibility
            } />
          </div>
        </div>

        {menuVisible &&
          (
            <div className='nav-wrap'>
              <div className="nav-links">
                <Link to={'/'} className='custom-link' onClick={toggleVisibility}>Home</Link>
                <Link to={'/trendy'} className='custom-link' onClick={toggleVisibility}>Trendy skins</Link>
              </div>
              <div className='button-group'>
                <a href='#' id='login-btn'>Login</a>
                <a href='#' id='register-btn'>Register</a>
              </div>

            </div>
          )
        }
      </Container>
      <Search />

    </nav>
  );
};

export default NavigationBar;
