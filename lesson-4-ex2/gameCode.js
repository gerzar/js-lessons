//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

function repeatablePart(letter){
    do {
        ok = false;
        event = +prompt(works[letter+"00"] + works[letter+"1"] + works[letter+'2'] + '-1 - Выход из игры');
       
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works[letter+'0'], event, letter);
        }
    } while (!ok);
    return event;
}

//Выводим первый вопрос
event = repeatablePart('a');

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        event = repeatablePart('b');
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                event = repeatablePart('d');
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                event = repeatablePart('d');
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        event = repeatablePart('c');
        switch (event) {
            case 1: // Второе действие
                event = repeatablePart('d');
                break;
            case 2: // Второе действие
                event = repeatablePart('d');
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
$qNumber = +prompt("ВВедите номер вопроса от 1 до 3: ");
if (!isNaN($qNumber) && $qNumber > 0 && $qNumber < 4) {
    console.log(answers[$qNumber-1].question + answers[$qNumber-1].answer );
    alert(works[answers[$qNumber-1].question+'00'] + '\n' + 'Вы выбрали: \n' +works[answers[$qNumber-1].question+answers[$qNumber-1].answer] );
}else{
    alert("ошибочка вышла... до свиданья");
}


// let cities = [{ id: 121, name: 'г. Урюпинск' }, { id: 122, name: 'г. Париж' }, { id: 123, name: 'г. Москва' }, { id: 124, name: 'г. Штормград' }];
// let searchTerm = 'г. Москва';
// let cityId = cities.find(city => city.name === searchTerm).id
// console.log(cityId);
//------------------------------------------
function isAnswer(q, event, letter) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
    var question = {
        question: letter,
        answer: event
    };
    answers.push(question);
	return true;
}