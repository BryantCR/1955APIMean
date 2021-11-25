var mongoose = require("mongoose");

var PeopleSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 3
    }
});

const Person = mongoose.model("People", PeopleSchema);

const ApiModel = {
    createPerson : function( newUser ){
        return Person.create( newUser );
    },
    getPerson : function(){
        return Person.find();
    },
    getPerson2 : function( animalId ){
        return Person.findOne({ animalId : animalId });
    },
    delete : function( animalId ){
        return Person.remove({ animalId : animalId });
    }
};

module.exports = {ApiModel};