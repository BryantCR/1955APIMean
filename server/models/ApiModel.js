var mongoose = require("mongoose");

var PeopleSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 3
    },
    created_at : {
        type : Date,
    },
    updated_at : {
        type : Date,
    }
});

const Person = mongoose.model("People", PeopleSchema);

const PersonModel = {
    createPerson : function( newName ){
        return Person.create( newName );
    },
    getAllNames : function(){
        return Person.find();
    },
    getPerson2 : function( animalId ){
        return Person.findOne({ animalId : animalId });
    },
    delete : function( animalId ){
        return Person.remove({ animalId : animalId });
    }
};

module.exports = {PersonModel};