import React, { useState } from 'react';
import firebase from '../../Firebase';
import 'firebase/auth';

const provider = new firebase.auth.TwitterAuthProvider();

const LoginMenu= (props) => {
	const [twitter,setTwitter] = useState('login twitter');
	console.log(props.twitterToken);

	const twitterOauth = () => {
		firebase.auth().signInWithPopup(provider).then((result)=>{
			const displayName = result.user.displayName;
			const token = result.credential.accessToken;
			const secret = result.credential.secret;
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
