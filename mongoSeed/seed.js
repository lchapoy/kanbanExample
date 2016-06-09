'use strict';
var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/kanban', {
    options: {
        db: {
            safe: true
        }
    }
});
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});
'use strict';
var Card = require('../server/card/card.model');
console.log('luis')
Card.find({}).remove(function(){
	  console.log('hi');
    Card.create({
        id:1,
        title: "Read the Book",
        description: "I should read the book",
        color: '#BD8D31',
        status: "in-progress",
        tasks: []
    },
    {
        id:2,
        title: "Write some code",
        description: "Code along with the samples ... at [github](https://github.com/pro-react)",
        color: '#3A7E28',
        status: "todo",
        tasks: [
            {id: 1, name:"ContactList Example", done:true},
            {id: 2, name:"Kanban Example", done:false},
            {id: 3, name:"My own experiments", done:false}
        ]
    },
    {
        id:3,
        title: "Kill some people",
        description: "somebody needs to die",
        color: '#3A7E28',
        status: "todo",
        tasks: [
            {id: 1, name:"ContactList Example", done:true},
            {id: 2, name:"Kanban Example", done:false},
            {id: 3, name:"My own experiments", done:false}
        ]
    },
    {
        id:4,
        title: "Go to",
        description: "Need to go",
        color: '#3A7E28',
        status: "todo",
        tasks: [
            {id: 1, name:"ContactList Example", done:true},
            {id: 2, name:"Kanban Example", done:false},
            {id: 3, name:"My own experiments", done:false}
        ]
    },
    {
        id:5,
        title: "Write some code",
        description: "Code along with the samples ... at [github](https://github.com/pro-react)",
        color: '#3A7E28',
        status: "todo",
        tasks: [
            {id: 1, name:"ContactList Example", done:true},
            {id: 2, name:"Kanban Example", done:false},
            {id: 3, name:"My own experiments", done:false}
        ]
    });
  },function(err){console.log(err)});
var x = Card.find({})
setTimeout(function(){
	console.log(x)
},1000)
/*User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      img: '/assets/images/no_user_image.jpg',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      img: '/assets/images/no_user_image.jpg',
      password: 'admin'
    }, {
      provider: 'local',
      name: 'Janet Perkins',
      email: 'jperkins@example.com',
      img: '/assets/images/janetPerkings.jpg',
      password: 'test'
    }, {
      provider: 'local',
      name: 'Mary Johnson',
      email: 'mjohnson@example.com',
      img: '/assets/images/maryJohnson.jpg',
      password: 'test'
    }, {
      provider: 'local',
      name: 'Peter Carlsson',
      email: 'pcarlsson@example.com',
      img: '/assets/images/peterCarlsson.jpg',
      password: 'test'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });*/

