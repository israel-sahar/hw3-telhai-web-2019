$(document).ready(function(){
    

var urlStr1 = 'http://api.icndb.com/jokes/random?firstName=';
var urlStr2 = '&lastName=' ;
var fullName = $(localStorage.getItem("name"));
var nameArr = fullName.selector.split(" ") ;
var firstName = nameArr[0];
var lastName = nameArr[1];
if(lastName == undefined){
    lastName = 'Banana';
}
var fullUrl = urlStr1.concat(firstName).concat(urlStr2).concat(lastName);

//ajax
$.ajax({
    url: urlStr1.concat(firstName).concat(urlStr2).concat(lastName),
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