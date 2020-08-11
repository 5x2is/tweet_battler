import React  from 'react';
import {Link} from 'react-router-dom';
import {functions} from '../../Firebase';

const CreateCard = () => {
	const getTweetListCall = functions.httpsCallable('getTweetList');
	
	const getTweetList = () => {
		getTweetListCall({name:'homu'}).then(res =>{
			console.log(res);
		}).catch(err => {
			console.error(err);
		});
	};
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
