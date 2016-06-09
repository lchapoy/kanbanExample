import React, {Component, PropTypes} from 'react';
import Card from './card';
import {DropTarget} from 'react-dnd';
import constants from './../constants.js'
import CardActionCreators from '../actions/CardActionCreators';

const listTargetSpec = {
	hover(props, monitor) {
		const draggedId = monitor.getItem().id;
		console.log(draggedId)
		console.log(props.id)
		CardActionCreators.updateCardStatus(draggedId, props.id);
		//props.cardCallbacks.updateStatus(draggedId, props.id)
	}
};
function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

class List extends Component{
	render(){
		const { connectDropTarget } = this.props;
		var cards = this.props.cards.map((card)=>{
			return <Card 	key={card._id}
							{...card}
						    id={card._id}

							 />
		})
		//console.log(cards);
		return  connectDropTarget(
			<div className="list">
				<h1>{this.props.title}</h1>
				{cards}
			</div>
		);
	}
}
List.propTypes={
	title:PropTypes.string.isRequired,
	cards:PropTypes.arrayOf(PropTypes.object),
	connectDropTarget: PropTypes.func.isRequired
}
export default DropTarget(constants.CARD, listTargetSpec, collect)(List);
