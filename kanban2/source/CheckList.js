import React, {
	Component,
	PropTypes
} from 'react';

class CheckList extends Component {
	render() {
		let tasks = this.props.tasks.map((task) => {
			return (
				<li key={task.id} className="checklist_task">
					<input type="checkbox" defaultChecked={task.done} /> 
						{task.name}
					<a href="#" className="checklist_task_remove" />
				</li>
			);
		});

		return (
			<div className="checklist">
				<ul>{tasks}</ul>
				<input type="text"
						className="checklist_add_task"
						palceholder="Type then hit Enter to add a task"/>
			</div>
		);
	}
};

CheckList.propTypes = {
	cardId: PropTypes.number,
	tasks: PropTypes.arrayOf(PropTypes.object)
};

export default CheckList;