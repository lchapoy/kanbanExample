import React, {Component} from 'react'
import KanbanBoard from  './kanbanBoard'

import {Container} from 'flux/utils';
import CardActionCreators from '../actions/CardActionCreators';
import CardStore from '../stores/CardStore';

import 'whatwg-fetch';
/*
// If you're running the server locally, the URL will be, by default, localhost:3000
// Also, the local server doesn't need an authorization header.
const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'// The Authorization is not needed for local server
};
*/


class KanbanBoardContainer extends Component{

    componentDidMount(){
        CardActionCreators.fetchCards();
    }

    render(){
        let kanbanBoard = this.props.children && React.cloneElement(this.props.children, { cards:this.state.cards});

        return kanbanBoard
    }
}
KanbanBoardContainer.getStores = () => ([CardStore]);
KanbanBoardContainer.calculateState = (prevState) => ({
    cards: CardStore.getState()
});
export default  Container.create(KanbanBoardContainer);