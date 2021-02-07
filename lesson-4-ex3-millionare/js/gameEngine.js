var summ = 0, call = 0, hall = 0, fifty = 0, qCount = 0, tryCount = 0;

while(qCount < qMas.length){
	let userAnswer = +prompt(qMas[qCount].text + '\n' 
	+ '1. '+ qMas[qCount].answer1+ '\n' + '2. '+ qMas[qCount].answer2+ '\n' 
	+ '3. '+ qMas[qCount].answer3+ '\n' + '4. '+ qMas[qCount].answer4 
	+ '\n (макс кол-во использований любой из подсказок 1)'
	+ '\n 5. Звонок другу. использовано раз: ' + call  
	+ '\n 6. Помощь аудитории. использовано раз: ' + hall 
	+ '\n 7. 50 на 50. использовано раз: ' + fifty 
	+ " \n Введите 8, чтобы забрать деньги.");
	while(isNaN(userAnswer) || userAnswer < 1 || userAnswer > 8 ) {
		alert("Введите верное значение, либо 8 если хотите закончить игру!");
		userAnswer = +prompt(qMas[qCount].text + '\n' 
		+ '1. '+ qMas[qCount].answer1+ '\n' + '2. '+ qMas[qCount].answer2+ '\n' 
		+ '3. '+ qMas[qCount].answer3+ '\n' + '4. '+ qMas[qCount].answer4 
		+ '\n (макс кол-во использований любой из подсказок 1)'
		+ '\n 5. Звонок другу. использовано раз: ' + call  
		+ '\n 6. Помощь аудитории. использовано раз: ' + hall 
		+ '\n 7. 50 на 50. использовано раз: ' + fifty 
		+ " \n Введите 8, чтобы забрать деньги.");
	}
	if (userAnswer == 5 && call == 0) {

		call++;
		alert("Вы выбрали звонок другу. Юрий ответил вам, что с вероятностью в 95% верный ответ: " + qMas[qCount].correct.substring(qMas[qCount].correct.length - 1)   + '\n' 
			+ '1. '+ qMas[qCount].answer1+ '\n' + '2. '+ qMas[qCount].answer2+ '\n' 
			+ '3. '+ qMas[qCount].answer3+ '\n' + '4. '+ qMas[qCount].answer4 
			);

	}else if (userAnswer == 6 && hall == 0) {

		hall++;
		alert("Большинство проголосовало за номер " + qMas[qCount].correct.substring(qMas[qCount].correct.length - 1) + '. ' + qMas[qCount][qMas[qCount].correct] + '\n'	);

	}else if (userAnswer == 7 && fifty == 0) {

		let number = qMas[qCount].correct.substring(qMas[qCount].correct.length - 1);
		let wrongAnswer = '';
		if(number > 1 ){
			wrongAnswer = 'answer'+(number - 1);
		}else{
			wrongAnswer = 'answer' + (number + 1);
		}	
		fifty++;
		alert("Компьютер дал вам на выбор два варианта ответа: \n" + number + '. ' + qMas[qCount][qMas[qCount].correct] +'\n' +wrongAnswer.substring(wrongAnswer.length - 1) + '. ' +qMas[qCount][wrongAnswer]+  '\n'	);

	}else if (userAnswer == 8) {

		alert("Cпасибо за игру. Ваш выйгрыш составил: "+ summ  +" рублей. До свидания!");
		break;

	}else if(userAnswer == 5 && call == 1){

		alert("Вы использовали максимальное количество звонков..");

	}else if(userAnswer == 6 && hall == 1){

		alert("Вы использовали максимальное количество подсказок аудитории..");

	}else if(userAnswer == 7 && fifty == 1){

		alert("Вы использовали максимальное количество подсказок 50 на 50..");

	}else{
		let compareUserAnswer = 'answer'+userAnswer;

		if (compareUserAnswer == qMas[qCount].correct) {
			++qCount;
			summ += 500*qCount;
			if (qCount == 15) {
				alert("Вы стали победителем ток-шоу \"Кто хочет стать миллионером!\" поздравляем Вас с этим немаленьким достижением и желаем удачи и счастья в личной жизни, а также вы выиграли: "+ summ + " рублей!!!!! Но потратить Вы их не сможете :Р ");
				break;
			}
			alert("И это правильный ответ! Вы выйграли: " + summ + " рублей");

		}else{
			alert("Это не правильный ответ, Вы самое слабое звено, прощайте, однако вы смогли заработать: " + summ + ' рублей');
			break;
		}
	}
}