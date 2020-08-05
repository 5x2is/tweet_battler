import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../Firebase';
import 'firebase/auth';

const provider = new firebase.auth.TwitterAuthProvider();

const LoginMenu= () => {
	const [twitter,setTwitter] = useState('login twitter');

	const twitterOauth = () => {
		firebase.auth().signInWithPopup(provider).then((result)=>{
			const displayName = result.user.displayName;
			setTwitter(displayName);
			this.props.history.push('/MainMenu');
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
			<Link to='/MainMenu'>
				<button>
					go to MainMenu
				</button>
			</Link>
		</div>
	);
};
export default LoginMenu;
