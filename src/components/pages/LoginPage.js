import React, { useState } from 'react';
import {auth, firebase} from '../../Firebase';
import { withRouter } from 'react-router-dom';

const provider = new firebase.auth.TwitterAuthProvider();

const LoginPage= (props) => {
	const twitterOauth = () => {
		auth.signInWithPopup(provider).then((result)=>{
			console.log(result.additionalUserInfo);
			const displayName = result.user.displayName;
			const userId= result.additionalUserInfo.profile.id_str;
			const token = result.credential.accessToken;
			const secret = result.credential.secret;
			props.setTwitterData({
				token:token,
				secret:secret,
				displayName:displayName,
				userId:userId
			});
			props.history.push('/MainMenu');
		}).catch((error)=>{
			console.log('error');
			console.log(error.code);
		});
	}
	return(
		<div>
			<button  onClick={()=>twitterOauth()}>
				ツイッターでログインする
			</button>
		</div>
	);
};
export default withRouter(LoginPage);
