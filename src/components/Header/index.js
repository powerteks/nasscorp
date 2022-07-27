import React, { useState } from 'react';
import { Container, Button, Navbar , OnToggle } from 'react-bootstrap';

import NavMenu from './../NavMenu';
import FormSearch from './../FormSearch';

function Header () {

	const [ showSearch, setShowSearch ] = useState(false);
	const [ showMenu, setShowMenu ] = useState(false);


	let toggleMenu = (showMenu) ? 'show-menu' : ' 1';
	let toggleSearch = (showSearch) ? ' navbar__form_show' : '';

	const toggle = () => {
		(showMenu) ? setShowMenu(false) : setShowMenu(true);
	}


	return (
		<>
			<Navbar className={ toggleMenu } expand="lg" onToggle={ toggle }>
				<Container className='container_header'>
					<Navbar.Brand href='#home' className='header__brand me-auto'>Nasscorp</Navbar.Brand>
					<div className='header__button-bar navbar__button-bar_search'>
						<FormSearch onClose={ () => setShowSearch(false) } toggleSearch={ toggleSearch } />
						<Button title='Search' className='header__button' onClick={ () => setShowSearch(true) }>
							<svg width='24' height='24' className='header__icon' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
								<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/>
							</svg>
							<span className='visually-hidden'>Search</span>
						</Button>
						<Button title='Cart' className='header__button'>
							<svg width='24' height='24' className='header__icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'>
								<path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'/>
							</svg>
							<span className='visually-hidden'>Cart</span>
						</Button>
						<Navbar.Toggle aria-controls='basic-navbar-nav' onClick={ () => setShowMenu(true) } className='header__button' title='Menu'>
							<svg width='24' height='24' className='header__icon' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'>
								<path d='M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z'/>
							</svg>
							<span className='visually-hidden'>Menu</span>
						</Navbar.Toggle>
					</div>
					<NavMenu />
				</Container>
			</Navbar>
			<div className='header__background'></div>
		</>
	);
}

export default Header;