import React, { useState } from 'react';
import firebase from '../../Firebase';
import 'firebase/auth';

const provider = new firebase.auth.TwitterAuthProvider();

const LoginMenu= (props) => {
	const [twitter,setTwitter] = useState('login twitter');

	const twitterOauth = () => {
		firebase.auth().signInWithPopup(provider).then((result)=>{
			const displayName = result.user.displayName;
			setTwitter(displayName);
			props.history.push('/MainMenu');
		}).catch((error)=>{
			console.log('error');
			console.log(error.code);
		});
	}
	return(
		<div>
			<button  onClick={()=>twitterOauth()}>
				{twitter}
			</button>
		</div>
	);
};
export default LoginMenu;
