const {ApiModel} = require('./../models/ApiModel');

const PersonController = {

    allPeople: function(req, response){
        ApiModel
        .getAllNames()
        .then( data => {
            let people = data.map(person => {
                console.log( person );
                return {
                    person: person.name
                }
            })
        console.log( people );
        response.status( 200 ).json( people );
        })
        .catch( err => {
            console.log( "Something went wrong!" );
            console.log( err );
            response.json( err );
        })
    },

    addPerson: function(request, response){

        let name = request.params.name;
        let created_at = new Date();
        let updated_at = new Date();

        if(name){
            newName = {
                name,
                created_at,
                updated_at
            }
        

            console.log(newName);

            People
                .createname( newName )
                .then( result => {
                    response.status( 201 ).json( result );
                });
        }
        else{
            response.statusMessage = "You are missing a field to create a new user ('userName')";
            response.status( 406 ).end();
        }  
    },

    removePerson : function(req, res){
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