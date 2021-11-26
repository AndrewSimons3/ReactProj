import styles from './UserForm.module.css'
import { useState } from 'react'

const UserForm = () => {

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted data")
  }


  return (
		<form onSubmit={handleSubmit}>
			<div className={styles['form-control']}>
				<label>Username</label>
				<input onChange={handleUserNameInput}></input>
				<label>Age (Years)</label>
				<input onChange={handleUserAgeInput}></input>
				<button className={styles['form-button']}>Add User</button>
			</div>
		</form>
	);

}

export default UserForm;