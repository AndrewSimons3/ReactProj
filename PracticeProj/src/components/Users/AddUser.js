import styles from './AddUser.module.css';
import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();
    if (enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge)
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	return (
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
	);
};

export default AddUser;
