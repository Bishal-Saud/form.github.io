const mongooes = require('mongoose')

const userSchema = new mongooes.Schema({
    name:{
        type:String,
        maxLength:[25,'Use Less than 25 char'],
        required:[true,'Name is required'],
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Password is required'],
    },
})

module.exports = mongooes.model('User',userSchema)