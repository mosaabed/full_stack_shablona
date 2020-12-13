const mongoose = require('mongoose')
const Schema = mongoose.Schema


const studentSchema = new Schema({
    firstName : String,
    lastName: String,
    id : String 
})

const Student = mongoose.model("studentModel" , studentSchema)
module.exports = Student