const express = require('express');
const app = express();
app.use(express.json());

//create  user data:
const userInfoData = [

    {
        id :1,
        firstname:'Jigar',
        lastname:'Sony',
        phoneNumber:1234
    },
    {
        id : 2,
        firstname:'tom',
        lastname:'shah',
        phoneNumber:123
    },
    {
        id : 3,
        firstname:'dog',
        lastname:'sing',
        phoneNumber:111
    },
];

//create end points:
app.get('/api/info', function(req,res){
    res.send('Welcome to API World');
})

app.get('/api/users', function(req,res){
    res.json(userInfoData);
})

app.put('/api/users/:id', function(req,res){
    const id = req.params.id;
    const user = userInfoData.find(user => user.id == id);

   user.firstname=req.param('firstname'),
   user.lastname=req.param('lastname'),

   //user.firstname='abc',
   //user.lastname='def',

   res.json(user);
})


app.get('/api/users/:id', function(req,res){
    const id = req.params.id;
    const user = userInfoData.find(user => user.id == id);
    console.log(user)

    if(user){
        res.send(user)
    }
    else{
        res.send('NO user found');
    }
})

//start node server
const PORT = 3000;
app.listen(PORT,function(){
    console.log('Server Started');
})