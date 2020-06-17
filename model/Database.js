const mongoose = require('mongoose');


////create schema

const Schema = mongoose.Schema

const GeoShema = new Schema({
    type: {
        type:String,
        default: "Points"
    }, 
    coordinate: {
        type: [Number],
        index: '2dsphere'
    }
})

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
    },
    geometry: GeoShema
})

///create a model
const Ninja = mongoose.model('ninja', NinjaSchema); 

module.exports = Ninja

