import React from 'react';

import sprite from './../../assets/img/sprite.svg';

function Review ({ name, profession, rating, img, description }) {

	const fullStar = ( rating > 0 ) ? ( [...Array(Number(rating)).keys()].map(x => ++x) ) : null ;
	const noFullStar = ( rating < 5 ) ? ( [...Array(Number(5 - rating)).keys()].map(x => ++x) ) : null;

	return <div className='review'>
		<p className='review__name'>{ name }</p>
		<p className='review__profession'>{ profession }</p>
		<picture className='review__picture'>
			<img className='review__image' src={ img } alt={ profession + ' ' + name } />
		</picture>
		<div className='review__rating' data-rating={ rating }>
		{ ( fullStar ) ? fullStar.map((item, index) => 
			<div className='review__star' key={ index } >
				<svg className='review__icon' width='32px' height='32px'><use xlinkHref={ sprite + '#bxs-star' }></use></svg>
			</div> 
		) : null }
		{ ( noFullStar ) ? noFullStar.map((item, index) => 
			<div className='review__no-star' key={ index } >
				<svg className='review__icon' width='32px' height='32px'><use xlinkHref={ sprite + '#star' }></use></svg>
			</div>
		) : null }
		</div>
		<p className='review__description'>{ description }</p>
	</div>
}

export default Review;