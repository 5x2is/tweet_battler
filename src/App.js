import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import MainMenu from './components/pages/MainMenu';
import PageOne from './components/pages/PageOne';

const App = () => {
	return(
		<div>
			<BrowserRouter>
				<div>
					<Route path='/' exact component = {LoginPage}/>
					<Route path='/MainMenu' exact component = {MainMenu}/>
					<Route path='/pageOne' exact component = {PageOne}/>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
