import React  from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import 'firebase/auth';
import 'firebase/firestore';

const BattleMenu= () => {
	return(
		<div>
			バトルメニュー
			<Link to='/MainMenu'>
				<button>
					メニューに戻る
				</button>
			</Link>
		</div>
	);
};
export default BattleMenu;
