/**
 * Created by luis on 4/6/2016.
 */
import 'whatwg-fetch';
const API_HEADERS = {
    'Content-Type': 'application/json'
};

const API_URL = 'http://localhost:3000';
let KanbanAPI = {
    fetchCards(){
        return fetch(API_URL + '/card', {headers: new Headers(API_HEADERS), mode: 'cors'})
            .then((response) => {
                return response.json()
            });
    },
    addCard(card) {
        return fetch(`${API_URL}/card`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(card)
        })
            .then((response) => response.json())
    },
    updateCard(card, draftCard) {
       // console.log(draftCard)
        return fetch(`${API_URL}/card/${card._id}`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify(draftCard)
        })
    },
    persistCardDrag(cardId, status, index) {
        return fetch(`${API_URL}/card/${cardId}`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({status, row_order_position: index})
        })
    },
    addTask(cardId, task) {
        return fetch(`${API_URL}/card/${cardId}/tasks`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify({name:task.name,done:task.done})
        })
            .then((response) => response.json())
    },
    deleteTask(cardId, task) {
        return fetch(`${API_URL}/card/${cardId}/tasks/${task._id}`, {
            method: 'post',
            headers: API_HEADERS
        })
    },
    toggleTask(cardId, task) {
        return fetch(`${API_URL}/card/${cardId}/tasks/${task._id}`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({done:!task.done})
        })
    }

};
export default KanbanAPI;
