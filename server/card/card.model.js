/**
 * Created by luis on 3/30/2016.
 */
var mongoose = require( 'mongoose');
var Schema = mongoose.Schema;
var TaskSchema= new Schema({
    name:String,
    done:Boolean
});
var CardSchema= new Schema({
    id:Number,
    title: String,
    description: String,
    color: String,
    status: String,
    tasks: [TaskSchema]
});


module.exports= mongoose.model('Card',CardSchema);