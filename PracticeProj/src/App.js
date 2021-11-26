import React from 'react';
import UserForm from './components/UserForm';
import Users from './components/Users';
import './App.css';


function App() {
  return (
		<div>
			<section id='user-form'>
				<UserForm />
			</section>
			<section id='users'>
				<Users />
			</section>
		</div>
	);
}

export default App;
