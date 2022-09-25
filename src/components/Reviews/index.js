import React, { useState } from 'react';

import BlockText from './../BlockText';
import Review    from './../Review';

import men1 from './../../assets/img/men-1.jpg';
import men2 from './../../assets/img/men-2.jpg';
import men3 from './../../assets/img/men-3.jpg';

function reviewsArr () {
	return [
		{
			name       : 'Regina Miles',
			profession : 'Designer',
			rating     : '4',
			img        : men1,
			description: 'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.'
		},
		{
			name       : 'Regina Miles',
			profession : 'Designer',
			rating     : '3',
			img        : men2,
			description: 'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.'
		},
		{
			name       : 'Regina Miles',
			profession : 'Designer',
			rating     : '5',
			img        : men3,
			description: 'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.'
		}
	]
}

function Reviews () {

	const [ reviews, setReviews ] = useState( reviewsArr() );

	let onShift = ( id ) => {
		if ( id > 1 ) { reviews.push(reviews.shift()); }
		if ( id < 1 ) { reviews.unshift(reviews.pop()); }
		setReviews([...reviews]);
	}
	
	return <section className='reviews'>
		<div className='reviews__wrapper'>
			<BlockText className='reviews_block-text'
				class_title='reviews_title'
				title='What Clients&nbsp;Say'
				class_text='reviews_text'
				text='Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics' />
			<ul className='reviews-list list-reset'>
			{ reviews.map((item, i) => (
				<li onClick={ () => onShift(i) } key={ i }>
					<Review
						name={ item.name }
						profession={ item.profession }
						rating={ item.rating }
						img={ item.img }
						description={ item.description } />
				</li>
			)) }
			</ul>
		</div>
	</section>
}

export default Reviews;