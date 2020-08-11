import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {db} from '../../Firebase';

const MainMenu = (props) => {
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
			first:'湊',
			last:'みお'
		}).then((docRef)=>{
			console.log('Document written with ID: ',docRef.id);
		}).catch((error)=>{
			console.log('error',error);
		});
	}
	return(
		<div>
			{props.twitterData.displayName}でログインしました。
			<button  onClick={()=>getHttp()}>
				{button}
			</button>
			<button  onClick={()=>addData()}>
				AddData
			</button>
			<Link to='/CreateCard'>
				<button>
					ツイートからカードを生成
				</button>
			</Link>
			<Link to='/DeckMenu'>
				<button>
					デッキ構築
				</button>
			</Link>
			<Link to='/BattleMenu'>
				<button>
					バトル
				</button>
			</Link>
		</div>
	);
};
export default MainMenu;
