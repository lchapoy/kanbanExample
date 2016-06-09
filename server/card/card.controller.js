/**
 * Created by luis on 3/30/2016.
 */
var Card =require( './card.model');


exports.getCards= function(req,res,next){
    Card.find({})
        .exec(function(err,response){
           // console.log(response);
            res.send(response)
        })
};
exports.deleteTask = function(req,res,next){
    var replace=req.body;
   // Card.findOneAndUpdate({_id:req.params.cardId},replace,
   //     {upsert: true})
    Card.update({'_id': req.params.cardId}, {'$pull': {'tasks':{
        _id:req.params.taskId
    }}})
        .exec(function(err,response){
            console.log(err,response);
            res.send("work")
        })
};
exports.toggleTask = function(req,res,next){
    var done=req.body.done;
    Card.update({'tasks._id': req.params.taskId}, {'$set': {
        'tasks.$.done':done
    }})
  // Card.findOneAndUpdate({_id:req.params.cardId},replace,
  //      {upsert: true})
        .exec(function(err,response){
            console.log(err,response)
            res.send("work")
        });
};
exports.addTask = function(req,res,next){
    var newTask=req.body;

    Card.findOneAndUpdate({_id:req.params.cardId},{$push:{tasks:newTask}},
        {upsert: true})
        .exec(function(err,response){
            Card.findOne({_id:req.params.cardId})
            .exec(function(err,response){
                   res.json(response.tasks[response.tasks.length-1]);
                });

        })
};
exports.addCard = function(req,res,next){
    var newCard=req.body;
    delete newCard._id;

    Card.create(newCard,
        function(err,response){
            console.log(response);
            res.json(response);
        })
};
exports.updateCard = function(req,res,next){
    var newCard=req.body;
    console.log(newCard);
    Card.update({'_id':req.params.cardId},{'$set':newCard})
        .exec(function(err,response){
            console.log(err,response)
            res.json(response);
        });
};