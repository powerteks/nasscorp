import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Banner () {

	return <section className='banner'>
					<Container className='container_banner' breakpoints={['xl', 'md', 'xxs']}>
						<h2 className='banner__title'>Experts are here solve your business problem.</h2>
						<p className='banner__text'>We know how large objects will act, but things on a small scale just do not act that way.</p>
						<Button className='button button_banner'>Get Quote Now</Button>
						<Button className='button button_banner'>Learn More</Button>
					</Container>
				</section>
}

export default Banner;