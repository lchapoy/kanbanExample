import React, {Component, PropTypes} from 'react';
import TaskActionCreators from '../actions/TaskActionCreators';

class CheckList extends Component{
	checkInputKeyPress(evt){
		if(evt.key === 'Enter'){
			//this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
			//evt.target.value = '';
			let newTask = {id:Date.now(), name:evt.target.value, done:false};
			TaskActionCreators.addTask(this.props.cardId, newTask);
			evt.target.value = '';
		}
	}
	render(){
		let tasks = this.props.tasks.map((task,taskIndex)=>(
						<li className="checklist_task" key={task._id}>
							<input type="checkbox" defaultChecked={task.done} onChange={
 								TaskActionCreators.toggleTask.bind(null, this.props.cardId, task, taskIndex)
 								//this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task._id, taskIndex)
							}/>
							{task.name}
							<a href="#" className="checklist__task--remove"  onClick={
							 	TaskActionCreators.deleteTask.bind(null, this.props.cardId, task, taskIndex)
							 	//this.props.taskCallbacks.delete.bind(null, this.props.cardId, task._id, taskIndex)
							 }/>
						</li>
					))
		return (
			<div className="checklist">
				<ul>{tasks}</ul>
				<input type="text"
				  className="checklist--add-task"
				  placeholder="Type then hit Enter to add a task"
				  onKeyPress={this.checkInputKeyPress.bind(this)}/>
			</div>
		)
	}
}

CheckList.propTypes={
	tasks:PropTypes.arrayOf(PropTypes.object)
	//taskCallbacks: PropTypes.object,
	//cardId: PropTypes.number
}
export default CheckList