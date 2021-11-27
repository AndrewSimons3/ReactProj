import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import './App.css';


function App() {

  // const [userData, setUserData] = useState('')

  // const addUserData = (data) => {
  //   setUserData(data);
  //   console.log(userData);
  // }

  return (
		<div>
			<section id='user-form'>
        <AddUser />
			</section>
			{/* <section id='users'>
        <Users users={userData}/>
			</section> */}
		</div>
	);
}

export default App;
