/**
 * Created by luis on 4/4/2016.
 */
import React,{Component, PropTypes} from 'react';
import CardForm from './cardForm';
import CardStore from '../stores/CardStore';
import CardActionCreators from '../actions/CardActionCreators';
class EditCard extends Component{
    componentWillMount(){
        //let card = this.props.cards.find((card)=>card._id == this.props.params.card_id);
        let card = CardStore.getCard(this.props.params.card_id);
        this.setState(Object.assign({},card));
       // console.log(this.props.params)
    }
    handleChange(field, value){
        this.setState({[field]: value});
    }
    handleSubmit(e){
        e.preventDefault();

       // this.props.cardCallbacks.updateCard(this.state);
        CardActionCreators.updateCard(CardStore.getCard(this.props.params.card_id),this.state);
        this.props.history.pushState(null,'/');
    }
    handleClose(e){
        this.props.history.pushState(null,'/');
    }
    render(){
        return (
            <CardForm draftCard={this.state}
                      buttonLabel="Edit Card"
                      handleChange={this.handleChange.bind(this)}
                      handleSubmit={this.handleSubmit.bind(this)}
                      handleClose={this.handleClose.bind(this)} />
        )
    }
}
EditCard.propTypes = {
    cardCallbacks: PropTypes.object
}

export default EditCard;