import React from 'react';

function BlockText ({ className='', class_title='', title, class_text='', text }) {

	const classBlock = ( className ) ?
		'block-text' + ' ' + className : 'block-text';

	const classTitle = ( class_title ) ?
		'block-text__title' + ' ' + class_title : 'block-text__title';

	const classText = ( class_text ) ?
		'block-text__text' + ' ' + class_text : 'block-text__text';
	

	return <div className={ classBlock }>
		<h3 className={ classTitle }>{ title }</h3>
		<p className={ classText }>{ text }</p>
	</div>
}

export default BlockText;