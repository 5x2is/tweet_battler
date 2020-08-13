import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {functions} from '../../Firebase';

const CreateCard = (props) => {
	const [tweetListData,setTweetListData] = useState([]);
	const getTweetListCall = functions.httpsCallable('getTweetList');
	
	const getTweetList = () => {
		getTweetListCall(props.twitterData).then(res =>{
			console.log(res);
			setTweetListData(res.data);
		}).catch(err => {
			console.error(err);
		});
	};
	const tweetList = tweetListData.map((tweet, index)=>{
		return(
			<li key={index}>{tweet.text}</li>
		)
	});
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
			<ol>{tweetList}</ol>
		</div>
	);
};
export default CreateCard;
