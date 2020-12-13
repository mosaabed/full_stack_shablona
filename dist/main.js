

$('#b1').on("click" , function()
{
    let firstName = $('#i1').val()
    let lastName = $('#i2').val()
    let id = $('#i3').val()
    $.post('/addStudent', {firstName : firstName , lastName:lastName , id:id }, function (response) {
       console.log(response)
    })

})



$('#b2').on("click" , function(){
    $.get("/students" , function(res)
    {
        console.log(res)
    })

})

