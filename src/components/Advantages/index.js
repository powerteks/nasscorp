import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import sprite from './../../assets/img/sprite.svg';

function advantagesArr () {
	return [
		{
			img : '#ant-design_shop-twotone',
			span: '1.5K',
			text: ' happy customers'
		},
		{
			img : '#carbon_notebook',
			span: '12+',
			text: ' countries worldwide'
		},
		{
			img : '#clarity_users-line',
			span: '3K',
			text: ' cases done'
		},
		{
			img : '#fa-solid_award',
			span: '45',
			text: ' award winning'
		}
	]
}

function Advantages () {

	const [ advantages, setAdvantages ] = useState( advantagesArr() );

	return <section className='advantages advantages_main'>
						<Container className='container_advantages' breakpoints={['xl', 'md', 'xxs']}>
							<ul className='advantages__list list-reset'>
							{ advantages.map((item, i) => (
								<li className='advantages__item' key={ i + 1 }>
									<svg className='advantages__icon' width='48px' height='48px'><use xlinkHref={ sprite + item.img }></use></svg>
									<p className='advantages__text'><span>{ item.span }</span>{ item.text }</p>
								</li>
							)) }
							</ul>
						</Container>
					</section>
}

export default Advantages;