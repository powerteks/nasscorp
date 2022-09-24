import React from 'react';
import { Container } from 'react-bootstrap';

import Header   from './components/Header';
import Cards    from './components/Cards';
import Features from './components/Features';
import Reviews  from './components/Reviews';
import Team     from './components/Team';
import Branches from './components/Branches';
import FormEntry from './components/FormEntry';

export default function() {

	return <>
					<header className='header'>
						<Header />
					</header>
					<main>
						<Cards />
						<Features/>
						<Reviews/>
						<Team/>
						<Branches/>
						<FormEntry/>
						<div className='b-1'></div>
					</main>
					<footer className='c-1'>
						<Container>
						</Container>
					</footer>
				</>;
}