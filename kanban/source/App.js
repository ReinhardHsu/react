import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';
import {
	Router,
	Route
} from 'react-router';
import KanbanBoard from './KanbanBoard';
import EditCard from './EditCard';
import NewCard from './NewCard';
import createBrowserHistory from 'history/lib/createBrowserHistory';

ReactDOM.render((
		<Router history={createBrowserHistory()}>
		<Route component={KanbanBoardContainer}>
			<Route path="/" component={KanbanBoard}>
				<Route path="new" component={NewCard}/>
				<Route path="edit/:card_id" component={EditCard}/>
			</Route>
		</Route>
	</Router>),
	document.getElementById('root'));