import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavMenu () {
	return (
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav>
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#product">Product</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
				<Nav.Link href="#contact">Contact</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	);
}

export default NavMenu;