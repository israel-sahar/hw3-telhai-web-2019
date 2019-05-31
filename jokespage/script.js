$(document).ready(function(){
    

var fullName = $(localStorage.getItem("name"));
var nameArr = fullName.selector.split(" ") ;
var firstName = nameArr[0];
var lastName = nameArr[1];
if(lastName == undefined){
    lastName = 'Banana';
}
//ajax
$.ajax({
    
    url: 'http://api.icndb.com/jokes/random?firstName=' + firstName+'&lastName='+lastName,
    type: "get",
    success: function(data){
        $(".lead").html(
            data.value.joke
        );
    }, 
    error: function(err){
        console.log(err);
    }
});






});