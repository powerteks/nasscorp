import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import FooterBlock from './../FooterBlock';

import sprite from './../../assets/img/sprite.svg';

function footerMenu1Arr () {
	return [
		{
			link : '#',
			icon : '#facebook',
			title: 'Facebook',
		},
		{
			link : '#',
			icon : '#instagram',
			title: 'Instagram',
		},
		{
			link : '#',
			icon : '#twitter',
			title: 'Twitter',
		},
		{
			link : '#',
			icon : '#youtube',
			title: 'Youtube',
		}
	]
}

function footerMenu2Arr () {
	return [
		{
			link : '#',
			title: 'About Us',
		},
		{
			link : '#',
			title: 'Carrier',
		},
		{
			link : '#',
			title: 'We are hiring',
		},
		{
			link : '#',
			title: 'Blog',
		}
	]
}

function footerMenu3Arr () {
	return [
		{
			link : '#',
			title: 'Business Marketing',
		},
		{
			link : '#',
			title: 'User Analytic',
		},
		{
			link : '#',
			title: 'Live Chat',
		},
		{
			link : '#',
			title: 'Unlimited Support',
		},
	]
}

function footerMenu4Arr () {
	return [
		{
			link : '#',
			title: 'IOS & Android',
		},
		{
			link : '#',
			title: 'Watch a Demo',
		},
		{
			link : '#',
			title: 'Customers',
		},
		{
			link : '#',
			title: 'API',
		},
		{
			link : '#',
			title: '',
		}
	]
}


function Footer () {
	
	const [ menuSocial, setMenuSocial ]       = useState( footerMenu1Arr() );
	const [ menuInfo, setMenuInfo ]           = useState( footerMenu2Arr() );
	const [ menuFeatures, setMenuFeatures ]   = useState( footerMenu3Arr() );
	const [ menuResources, setMenuResources ] = useState( footerMenu4Arr() );

	return <>
		<Container className='footer_container' breakpoints={['xl', 'md', 'xxs']}>
			<div className='footer__block'>
				<h3 className='footer__title'>Get In Touch</h3>
				<p className='footer__text'>the quick fox jumps over the lazy dog</p>
				<ul className='footer__list-social list-reset'>
					{ menuSocial.map((item, i) => (
						<li className='footer__item-social' key={ i }>
							<a className='footer__link-social' href={ item.link }>
								<svg className='footer__icon' width='48px' height='48px'><use xlinkHref={ sprite + item.icon }></use></svg>
								<span className='visually-hidden'>{ item.title }</span>
							</a>
						</li>
					)) }
				</ul>
			</div>
			<FooterBlock title='Company info' menu={ menuInfo } />
			<FooterBlock title='Features' menu={ menuFeatures } />
			<FooterBlock title='Resources' menu={ menuResources } />
		</Container>
		<div className='footer__copyright'>
			<p>Made With Love By Figmaland All Right Reserved </p>
		</div>
	</>
}

export default Footer;