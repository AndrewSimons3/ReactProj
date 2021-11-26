import styles from './UserForm.module.css'

const UserForm = () => {
  return (
		<form>
			<div className={styles['form-control']}>
				<label>Username</label>
				<input></input>
				<label>Age (Years)</label>
				<input></input>
				<button className={styles['form-button']}>Add User</button>
			</div>
		</form>
	);

}

export default UserForm;