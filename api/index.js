const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'));


app.use(cors(
  {
    origin: ["https://crud-rho-eight.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
  }
));




mongoose.connect('mongodb+srv://Crud_App:Don45Wf6u8ely3jo@cluster0.sogcdsk.mongodb.net/?retryWrites=true&w=majority')
// Don45Wf6u8ely3jo
// mongodb+srv://Crud_App:Don45Wf6u8ely3jo@cluster0.sogcdsk.mongodb.net/?retryWrites=true&w=majority



app.get("/", (req, res) =>{
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
  .then(user => res.json(user))
  .catch(err => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    id,
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      enrollnumber: req.body.enrollnumber,
      dateofadmission: req.body.dateofadmission    
    },
  )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});


app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});



app.post("/createUser", (req, res) =>{
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


app.listen(4000, () => {
  console.log("Server is Running")
})
