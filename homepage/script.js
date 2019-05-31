 localStorage.clear();
$(document).ready(function(){
    $('#sgnbtn').click(function(){
        console.log($('#textbox').val())
        if($('#textbox').val()=="")
        {
              $('.msg').text('SignUp Failed, Empty Name')
              setTimeout(function(){
                $('.msg').text('')
              },3000)
        }
        else
        {
            localStorage.setItem('name',($('#textbox').val()))
            $('.msg').text('You Signed-Up.Please Log In..')
        }

    })

    $('#lgnbtn').click(function(){
      var nameU=localStorage.getItem('name')
        if($('#textbox').val()=="")
        {
              $('.msg').text('Login Failed, Empty Name')
              setTimeout(function(){
                $('.msg').text('')
              },3000)
              return;
        }

        if(nameU!=$('#textbox').val())
        {
            $('.msg').text('Login Failed, Name Not in Storage')
              setTimeout(function(){
                $('.msg').text('')
              },3000)
        }
        else
        {
            window.location.replace("../triviapage/triviapage.html");
        }

    })





})