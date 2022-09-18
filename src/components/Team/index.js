import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import BlockText from './../BlockText';

import men1 from './../../assets/img/men-4.jpg';
import men2 from './../../assets/img/men-5.jpg';
import men3 from './../../assets/img/men-6.jpg';
import men4 from './../../assets/img/men-7.jpg';

function teamArr () {
	return [
		{
			name       : 'Ashley Fletcher',
			profession : 'CEO',
			img        : men1,
			description: 'the quick fox jumps over the lazy dog'
		},
		{
			name       : 'Rodney Stratton',
			profession : 'Consultant',
			img        : men2,
			description: 'the quick fox jumps over the lazy dog'
		},
		{
			name       : 'Avie Beaton',
			profession : 'CO Founder',
			img        : men3,
			description: 'the quick fox jumps over the lazy dog'
		},
		{
			name       : 'Ben Jonson',
			profession : 'Consultant',
			img        : men4,
			description: 'the quick fox jumps over the lazy dog'
		}
	]
}

function Team () {

	const [ team, setTeam ] = useState( teamArr() );
	
	return <section className='team'>
		<Container className='team_container' breakpoints={['xl', 'md', 'xxs']}>
			<BlockText className='team_block-text'
				class_title='team_title'
				title='Meet Our Team'
				class_text='team_text'
				text='Problems trying to resolve the conflict between the&nbsp;two&nbsp;major&nbsp;realms of Classical physics: Newtonian mechanics' />
			<ul className='team-list list-reset'>
			{team.map((item, i) => (
				<li className='team__member' key={ i }>
					<img className='team__image' src={ item.img } alt={ item.profession + ' ' + item.name } />
					<p className='team__profession'>{ item.profession }</p>
					<p className='team__name'>{ item.name }</p>
					<p className='team__description'>{ item.description }</p>
				</li>
			)) }
			</ul>
		</Container>
	</section>
}

export default Team;