const mongoose = require('mongoose')


////create schema

const Schema = mongoose.Schema

const NinjaSchema = new Schema({
    name: {
        type:String,
        required: [true, "Name cannot be blank"]
    },

    rank:{
        type:String
    }, 
    available:{
        type:Boolean,
        default:false
    }
})

///create a model
const Ninja = mongoose.model('ninja', NinjaSchema); 

module.exports = Ninja

