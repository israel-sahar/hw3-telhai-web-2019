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
            localStorage.setItem(($('#textbox').val()),"name")
            $('.msg').text('You Signed-Up.Please Log In..')
        }

    })

    $('#lgnbtn').click(function(){
        console.log($('#textbox').val())
        console.log(localStorage.getItem($('#textbox').val()))
        if($('#textbox').val()=="")
        {
              $('.msg').text('Login Failed, Empty Name')
              setTimeout(function(){
                $('.msg').text('')
              },3000)
              return;
        }

        if(localStorage.getItem($('#textbox').val())==null)
        {
            $('.msg').text('Login Failed, Name Not in Storage')
              setTimeout(function(){
                $('.msg').text('')
              },3000)
        }
        else
        {
            $('.main-div').hide()
        }

    })





})