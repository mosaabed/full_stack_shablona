const express = require('express')
const router = express.Router() 

const student  = require('../moudels/student')

router.get('/students' , function(req , res){
    student.find({}, function (err, rstudentsData){
        res.send(rstudentsData)
    })
})



router.post('/addStudent' , function(req , res){
    let studentdata = req.body
    console.log(studentdata)
    let newstudent = new student(studentdata)
    newstudent.save()
    res.send(studentdata)

})




module.exports = router