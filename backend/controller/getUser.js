const User = require("../models/user");

module.exports.getUser = async(req,res) => {
   const { id } = req.body
     try{
        if(id)
        {
            return res.send( await User.findById(id))
        }
       return res.send(
            await User.find()
        )
     }
     catch(err){
       return res.send({err: err})
     }
}