import styles from './AddUser.module.css'
import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  }

   const handleUserAgeInput = (e) => {
     setUserAge(e.target.value);
     console.log(userAge);
   };
  
  const addUserHandler = (event) => {
    event.preventDefault();

    const userData = {
			name: userName,
			age: userAge
    };

    props.onAddUser(userData);
    
    setUserName('');
    setUserAge('');
  }


  return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<div className={styles['form-control']}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						id='username'
						onChange={handleUserNameInput}
					></input>
					<label htmlFor='age'>Age (Years)</label>
					<input id='age' type='number' onChange={handleUserAgeInput}></input>
					<Button type='submit'>
						Add User
					</Button>
				</div>
			</form>
		</Card>
	);
}

export default AddUser;