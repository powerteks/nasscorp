import React from 'react';

function FooterBlock ({ title, menu }) {

	return <div className='footer__block'>
		<h3 className='footer__title'>{ title }</h3>
		<ul className='footer__list list-reset'>
			{ menu.map((item, i) => (
				<li className='footer__item' key={ i }>
					<a className='footer__link' href={ item.link }>{ item.title }</a>
				</li>
			)) }
		</ul>
	</div>
}

export default FooterBlock;