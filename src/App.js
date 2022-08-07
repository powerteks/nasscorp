import React from 'react';
import { ThemeProvider, Container } from 'react-bootstrap';

import Header     from './components/Header';

export default function() {

	return <>
					<header className='header'>
						<Header />
					</header>
					<main>
						<div className='b-1'></div>
					</main>
					<footer className='c-1'>
						<Container>
						</Container>
					</footer>
					</>;
}