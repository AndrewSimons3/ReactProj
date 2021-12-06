import { useState } from 'react';
import useInput from '../hooks/use-input';

const BasicForm = (props) => {
	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameInputHasError,
		valueChangeHandler: firstNameChangedHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameInputHasError,
		valueChangeHandler: lastNameChangedHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes('@'));


	const formSubmitHandler = () => {};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<div className='form-control'>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='first-name'
						onChange={firstNameChangedHandler}
						onBlur={firstNameBlurHandler}
						value={enteredFirstName}
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='last-name'
						onChange={lastNameChangedHandler}
						onBlur={lastNameBlurHandler}
						value={enteredLastName}
					/>
				</div>
			</div>
			<div className='form-control'>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='text'
					id='name'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
