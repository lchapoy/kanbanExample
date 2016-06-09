/**
 * Created by luis on 3/30/2016.
 */
var Router = require( 'express').Router;
var router= new Router();
var controller = require( './card.controller');

router.get('/',controller.getCards);
router.post('/',controller.addCard);
router.put('/:cardId',controller.updateCard);
router.post('/:cardId/tasks/:taskId',controller.deleteTask);
router.post('/:cardId/tasks',controller.addTask);
router.put('/:cardId/tasks/:taskId',controller.toggleTask);

module.exports = router;