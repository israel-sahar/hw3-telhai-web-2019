$(document).ready(function () {
    var btn = document.getElementById('b1');
    btn.addEventListener('click', nextitem)
    b2.style.display = 'none'
    var answers = { 'correct': 0, 'wrong': 0 }
    var putput = document.getElementById('output');
    var questionCounter =0

    function nextitem() {
        questionCounter++
        console.log(questionCounter)
        b1.style.display = 'none'
        var url = 'https://opentdb.com/api.php?amount=3&difficulty=easy&type=multiple';
        var html = '<h2>Question</h2>'
        requestAJAX(url, function (data) {
            console.log(data.results[0]);
            var obj = data.results[0];
            html += '<div class = "question">' + obj.question + '</div>';
            output.innerHTML = html;
            questionBuilder(obj.correct_answer, obj.incorrect_answers)
        })
    }

    function questionBuilder(cor, incor) {
        var holder = incor;
        holder.push(cor);
        holder.sort();
        var selectAnswer = document.getElementById('selectAnswers')
        selectAnswer.innerHTML = '';
        for (var i = 0; i < holder.length; i++) {
            var elem = document.createElement('div')
            var checker = holder[i] == cor ? true : false;
            elem.setAttribute('data-cor', checker);
            elem.innerHTML = holder[i];
            elem.addEventListener('click', checkAnswer)
            selectAnswer.appendChild(elem);
        }

    }

    function checkAnswer() {
        console.log(questionCounter)
        var res = event.target.getAttribute('data-cor')
        var corrAnswerValue = currectAnswer();
        b1.style.display = 'block'
        if (res == 'true') {
            answers.correct++;
            selectAnswers.innerHTML = 'Correct!'
            console.log(answers.correct)

        }
        else {
            answers.wrong++;
            selectAnswers.innerHTML = 'Wrong, the right answer was: '+corrAnswerValue
        }
        document.getElementById('score').innerHTML = 'Correct ' + answers.correct + ' Wrong ' + answers.wrong
        if(questionCounter == 3 && answers.correct == 3)
        {
            b2.style.display = 'block'
            if(answers.correc != 3)
            {
            selectAnswers.innerHTML = 'you have to answer all the questions currectlly, your score was: '+ answers.correct+' out of 3'
            b1.innerHTML = 'try again'
            answers.correct=0;
            answers.wrong=0;
            questionCounter =0;
            }
        }
        else
        b1.innerHTML = 'another question'
    }

    function requestAJAX(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200)
                callback(JSON.parse(xhr.responseText))
        }
        xhr.open('GET', url, true)
        xhr.send();
    }

    function currectAnswer() {
        var anElem = document.querySelectorAll('#selectAnswers div')
        for (var i = 0; i < anElem.length; i++) {
            if (anElem[i].getAttribute('data-cor') == 'true') {
                return anElem[i].innerText
            }
        }
    }
});