import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

import sprite from './../../assets/img/sprite.svg';
import cover from './../../assets/img/cover.jpg';

function playVideo () {
	<video className='features__video' controls='controls' autoPlay='' src=''></video>;
}

function Features () {

	const [ isShow, setIsShow ] = useState( false );

	const showVideo = () => setIsShow(!isShow);

	return <section className='features'>
					<Container className='features_container' breakpoints={['xl', 'md', 'xxs']}>
						<div className='features__intro'>
							<h3 className='features__title'>We are providing best business service.</h3>
							<p className='features__text'>Problems trying to resolve the&nbsp;conflict between the&nbsp;two major realms of Classical physics: Newtonian mechanics</p>
						</div>
						<div className='features__block'>
							<div className='features__block-video'>
								{ !isShow && 
								<>
									<picture className='features__picture'>
										<img className='features__image' src={cover} alt='Picture video' />
									</picture>
									<button className='features__button' onClick={ showVideo }><span className='visually-hidden'>Play</span></button>
								</>
								}
								{ isShow && 
									<video className='features__video' controls='controls' autoPlay='' src=''></video>
								}
							</div>
							<div className='features__block-description'>
								<h3 className='features__title features__title_description'>Most trusted in our field</h3>
								<p className='features__text features__text_description'>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
								<ul className='features__list list-reset'>
									<li className='features__item'>
										<svg className='features__icon' width='32px' height='32px'><use xlinkHref={ sprite + '#people' }></use></svg>
										<p className='features__item-text'><span>the quick fox jumps over the lazy dog</span>Things on a very small scale ...</p>
									</li>
									<li className='features__item'>
										<svg className='features__icon' width='32px' height='32px'><use xlinkHref={ sprite + '#speed' }></use></svg>
										<p className='features__item-text'><span>the quick fox jumps over the lazy dog</span>Things on a very small scale ...</p>
									</li>
								</ul>
							</div>
						</div>
					</Container>
				</section>
}

export default Features;