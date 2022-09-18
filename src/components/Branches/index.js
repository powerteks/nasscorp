import React from 'react';
import { Container } from 'react-bootstrap';

import BlockText from './../BlockText';

import map from './../../assets/img/map.png';

function Branches () {
	
	return <section className='branches'>
		<Container className='branches_container' breakpoints={['xl', 'md', 'xxs']}>
		<BlockText className='branches_block-text'
				class_title='branches_title'
				title='We Have Branches All Over The World'
				class_text='branches_text'
				text='The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th century, which gave some indications about how small things do behave, produced an increasing confusion which was Heisenberg, and Born.' />
		<img className='branches_image' src={ map } alt='World map' />
		</Container>
	</section>
}

export default Branches;