$(document).ready(function(){
    var btn = document.getElementById('b1');
    btn.addEventListener('click',nextitem)
    var answers = {'correct':0,'wrong':0}
    var putput = document.getElementById('output');

    function nextitem(){
        var url = 'https://opentdb.com/api.php?amount=3&difficulty=easy&type=multiple';
        var html = '<h2>Question</h2>'
        requestAJAX(url,function(data){
            console.log(data.results[0]);
            var obj = data.results[0];
            html +='<div class = "question">'+obj.question+'</div>';
            output.innerHTML = html;
            questionBuilder(obj.correct_answer,obj.incorrect_answers)
        })
    }

    function questionBuilder(cor,incor){
        var holder = incor;
        holder.push(cor);
        holder.sort();
        var selectAnswer = document.getElementById('selectAnswers')
        selectAnswer.innerHTML = '';
        console.log(holder)

    }

    function checkAnswer(){
        console.log(event.target)
    }

    function requestAJAX(url,callback){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200)
            callback(JSON.parse(xhr.responseText))
        }
        xhr.open('GET',url,true)
        xhr.send();
    }
});