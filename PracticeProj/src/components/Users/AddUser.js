import styles from './AddUser.module.css';
import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid age (> 0).',
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<div className={styles['form-control']}>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							id='username'
							value={enteredUsername}
							onChange={usernameChangeHandler}
						></input>
						<label htmlFor='age'>Age (Years)</label>
						<input
							id='age'
							type='number'
							value={enteredAge}
							onChange={ageChangeHandler}
						></input>
						<Button type='submit'>Add User</Button>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
