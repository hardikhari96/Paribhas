const { unauthorised } = require("../lib/errors.codes.lib");
const { USERS } = require("../models/USERS");
module.exports = (req,res,next)=>{
    USERS.findOne({
        where:{
            id:req.body.id
        }
    }).then((data)=>{
        if(data){
            next()
        }else{
            res.status(unauthorised.code).json(unauthorised);
        }
    })
}