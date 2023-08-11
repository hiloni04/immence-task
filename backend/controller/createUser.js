const User = require("../models/user");


module.exports.createUser = async(req,res) => {
    const { firstName,lastName,email, phoneNumber} = req.body;
    const newUser = 
    {firstName,lastName,email, phoneNumber}
     try{
       return res.send(
            await User.create(newUser)
        )
     }
     catch(err){
       return res.send({err: err})
     }
}

