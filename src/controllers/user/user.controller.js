const {USERS} = require('../../models/USERS');

class userController{

    constructor(){
        
    }
    create(req,res) { 
        USERS.create({
            MOBILE_NO: 443,
            EMAIL_ID: 'fasdfas',
            F_NAME: 'fsdfas'
        }).then(function(jane) {
            res.json(jane.get({
                plain: false
            }));
        });
    }
    test(req,res){
        res.json({
            success:true
        })
    }
}
module.exports = (options)=> new userController(options)