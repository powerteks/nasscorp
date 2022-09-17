import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import sprite from './../../assets/img/sprite.svg';

function cardsArr () {
	return [
		{
			img : '#icon-bag',
			title: 'Business Growing',
			text: 'the quick fox jumps',
			link: '1'
		},
		{
			img : '#ant-design_shop-twotone',
			title: 'Digital Marketing',
			text: 'the quick fox jumps',
			link: '2'
		},
		{
			img : '#web',
			title: 'Web Development',
			text: 'the quick fox jumps',
			link: '3'
		},
		{
			img : '#carbon_notebook',
			title: 'National top 50 firms',
			text: 'the quick fox jumps',
			link: '4'
		}
	]
}

function Cards () {

	const [ cards, setCards ] = useState( cardsArr() );

	return <section className='cards'>
					<Container className='container_cards' breakpoints={['xl', 'md', 'xxs']}>
						<ul className='cards__list list-reset'>
						{ cards.map((item, i) => (
							<li className='cards__item' key={ i }>
								<svg className='cards__icon' width='48px' height='48px'><use xlinkHref={ sprite + item.img }></use></svg>
								<h3 className='cards__title'>{ item.title }</h3>
								<p className='cards__text'>{ item.text }</p>
								<Button className='button button_cards' href={ item.link }>More <span></span></Button>
							</li>
						)) }
						</ul>
					</Container>
				</section>
}

export default Cards;