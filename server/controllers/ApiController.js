const {ApiModel} = require('./../models/ApiModel');

const PersonController = {

    allPeople: function(req, res){
        ApiModel
        .getPerson()
        .then( data => {
            console.log( data );
            response.json( { people : data } );
        })
        .catch( err => {
            console.log( "Something went wrong!" );
            console.log( err );
            response.json( err );
        })
    },

    addPerson: function(req, res){
        People.create({name:req.params.name}, function(err, people){
            if(err){
                res.json(err);
            }
            else{
                res.json({added:true});
            }
        })
    },

    removePerson: function(req, res){
        People.remove({name:req.params.name},function(err,person){
            if(err)
                res.json(err);
            else
                res.json({removed:true});
        })
    },

    details: function(req, res){
        People.findOne({name:req.params.name},function(err,person){
            if(err)
                res.json(err);
            else
                res.json(person);
        })
    }
}

module.exports = {PersonController};