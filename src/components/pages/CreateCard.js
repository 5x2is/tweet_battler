import React  from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import firebase from '../../Firebase';
import 'firebase/auth';
import 'firebase/firestore';

const CreateCard = () => {
	return(
		<div>
			ツイートからカードを生成
			<Link to='/MainMenu'>
				<button>
					メニューに戻る
				</button>
			</Link>
		</div>
	);
};
export default CreateCard;
