import React  from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import firebase from '../../Firebase';
import 'firebase/auth';
import 'firebase/firestore';

const CreateCard = () => {
	const getTweetList = () => {
		axios
			.get('https://us-central1-helloworld1132.cloudfunctions.net/getTweetList')
			.then((result) =>{
				console.log(result.data);
			})
			.catch((error)=>{
				console.error(error);
			});
	}
	return(
		<div>
			ツイートからカードを生成
			<Link to='/MainMenu'>
				<button>
					メニューに戻る
				</button>
			</Link>
			<button  onClick={()=>getTweetList()}>
				ツイートを取得する
			</button>
		</div>
	);
};
export default CreateCard;
