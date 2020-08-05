import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import MainMenu from './components/pages/MainMenu';
import CreateCard from './components/pages/CreateCard';
import DeckMenu from './components/pages/DeckMenu';
import BattleMenu from './components/pages/BattleMenu';

const App = () => {
	return(
		<div>
			<BrowserRouter>
				<div>
					<Route path='/' exact component = {LoginPage}/>
					<Route path='/MainMenu' exact component = {MainMenu}/>
					<Route path='/CreateCard' exact component = {CreateCard}/>
					<Route path='/DeckMenu' exact component = {DeckMenu}/>
					<Route path='/BattleMenu' exact component = {BattleMenu }/>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
