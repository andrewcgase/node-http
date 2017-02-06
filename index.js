console.log("WOOT NODE IS AWESOME")
let express = require('express')
let server = express()
let bodyParser = require('body-parser')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

// server.post('/users', function(req, res){

//   let username = req.body.username
//   let password = req.body.password

//   if(username == 'JakeTheGreat' && password == '123Password!'){
//     return res.send('YOU HAVE SUCCESSFULLY LOGGED IN Good Job')
//   }

//   return res.send('IM SORRY THAT IS INCORRECT')
// })


let db = {
  users: [],
  tasks: []
}

let uuid = require('uuid')

server.post('/user', function (req, res) {

  let user = {
    id: '',
    name: ''
  }
  user.name = req.body.name
  user.id = uuid.v1()

  db.users.push(user)
  res.send(user)

})

server.get('/users/:id', function (req, res) {

  let userId = req.params.id

  for(var i = 0; i < db.users.length; i++){
    var userInstance = db.users[i]

    if (userInstance.id == userId){
      res.send(userInstance)
    }

  }

 

})

server.put('/users/:id', function (req, res) {
  
  let userId = req.params.id

  for(var i = 0; i < db.users.length; i++){
    var userInstance = db.users[i]

    if (userInstance.id == userId){
      userInstance.name = req.body.name
      userInstance.id = req.body.id
      res.send(db.users)
    }

  }

  



})

server.delete('/users/:id', function (req, res) {

  let userId = req.params.id

  for(var i = 0; i < db.users.length; i++){
    var userInstance = db.users[i]

    if (userInstance.id == userId){
      db.users.splice(i,1)
      res.send(db.users)
    }

  }

})

server.post('/task', function (req, res) {

  let task = {
    id: '',
    task: '',
    userId: ''
  }
  task.task = req.body.task
  task.userId = req.body.userId
  task.id = uuid.v1()

  db.tasks.push(task)
  res.send(task)

})

server.get('/tasks/:id', function (req, res) {

  let taskId = req.params.id

  for(var i = 0; i < db.tasks.length; i++){
    var taskInstance = db.tasks[i]

    if (taskInstance.id == taskId){
      res.send(taskInstance)
    }

  }

server.put('/tasks/:id', function (req, res) {
  
  let taskId = req.params.id

  for(var i = 0; i < db.tasks.length; i++){
    var taskInstance = db.tasks[i]

    if (taskInstance.id == taskId){
      taskInstance.name = req.body.name
      taskInstance.id = req.body.id
      res.send(db.tasks)
    }

  }


})

server.delete('/tasks/:id', function (req, res) {

  let taskId = req.params.id

  for(var i = 0; i < db.tasks.length; i++){
    var taskInstance = db.tasks[i]

    if (taskInstance.id == taskId){
      db.tasks.splice(i,1)
      res.send(db.tasks)
    }

  }





server.get('/', function (req, res) {
  res.send({ woot: 'node is awesome' })
})

server.get('/captain', function (req, res) {
  res.sendFile(__dirname + '/category-captain.jpg')
})


server.listen(8080, function () {
  console.log('THE SERVER IS RUNNING ON PORT 8080')
})












