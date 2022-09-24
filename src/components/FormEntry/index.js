import React, { useState } from 'react';

import { Container, Button, Form } from 'react-bootstrap';

import img from './../../assets/img/workers.jpg';

function formFieldsArr () {
	return [
		{ name: 'name',   label: 'Name',   placeholder: 'Full Name',          value: '',  valid: false,  pattern: /^.{2}.+$/ },
		{ name: 'email',  label: 'Email',  placeholder: 'example@gmail.com',  value: '',  valid: false,  pattern: /^.+@.+$/  },
	]
}

function FormEntry () {

	const [formFields, setFormFields] = useState( formFieldsArr() );

	let formVaid = () => {
		return this.form.every(f => f.valid);
	}

	let formEntryData = () => {
		let result = {};

		form.forEach( field => {
			result[ field.name ] = field.value;
		});

		return result;
	}

	let update = (name, value) => {
		const field = this.form.find(field => field.name == name);

		if (field !== undefined) {
			field.value = value.trim();
			field.valid = field.pattern.test(field.value);
		}
	}

	return <section className='form-entry'>
		<Container className='form-entry_container'>
			<picture className='form-entry__picture'>
				<div className='form-entry__wrapper'>
					<img className='form-entry__image' src={ img } alt='Workers' />
				</div>
			</picture>
			<div className='form-entry__block'>
				<h3 className='form-entry__title'>Get A Free Quote Here</h3>
				<Form className='form-entry__form'>
				{formFields.map(field => (
					<Form.Group className='form-entry__field' key={ field.name }>
						<Form.Label className='form-entry__label'>{ field.label + '*' }</Form.Label>
						<Form.Control type='text'
								className={`form-control ${ field.value.length && !field.valid ? ' border border-danger' : '' }` }
								placeholder={ field.value }
								value={ field.value }
								name={ field.name }
								pattern={ field.pattern }
								required
								onChange={ e => update(field.name, e.target.value.trim()) }
							/>
					</Form.Group>
				)) }
					<Form.Group className='form-entry__field form-entry__field_select'>
						<Form.Label className='form-entry__label'>Department *</Form.Label>
						<Form.Select aria-label='Default select example' required>
							<option>Please Select</option>
							<option value='1'>Design</option>
							<option value='2'>CEO</option>
							<option value='3'>Management</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className='form-entry__field form-entry__field_select'>
						<Form.Label className='form-entry__label'>Department *</Form.Label>
						<Form.Select aria-label='Default select example' required>
							<option value='4:00'>4:00 Available</option>
							<option disabled>5:00 Unavailable</option>
							<option value='6:00'>6:00 Available</option>
							<option value='7:00'>7:00 Available</option>
						</Form.Select>
					</Form.Group>
					<Button className='form-entry__button' type='submit'>Book Appointment</Button>
				</Form>
			</div>
		</Container>
	</section>
}

export default FormEntry;