
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require('dotenv').config()

const routes = require("./routes/user")


const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() =>{
    console.log("Connected to mongoDB...")
})
.catch((err) => {
    console.log(err)
})

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors())

app.use(routes)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

