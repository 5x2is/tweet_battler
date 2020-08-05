import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import firebase from '../../Firebase';
import 'firebase/auth';
import 'firebase/firestore';

const db = firebase.firestore();

const MainMenu = () => {
	const [button,setButton] = useState('hello!!');

	const getHttp = () => {
		setButton('getHTTP');
		axios
			.get('https://us-central1-helloworld1132.cloudfunctions.net/helloWorld')
			.then((result) =>{
				setButton(result.data);
			})
			.catch((error)=>{
				console.error(error);
			});
	}
	const addData = () => {
		db.collection('sample1').add({
			first:'国木田',
			last:'花丸'
		}).then((docRef)=>{
			console.log('Document written with ID: ',docRef.id);
		}).catch((error)=>{
			console.log('error',error);
		});
	}
	return(
		<div>
			<button  onClick={()=>getHttp()}>
				{button}
			</button>
			<button  onClick={()=>addData()}>
				AddData
			</button>
			<Link to='/pageOne'>
				<button>
					go to pageOne
				</button>
			</Link>
		</div>
	);
};
export default MainMenu;
