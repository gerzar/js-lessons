function Question (text, answer1, answer2, answer3, answer4, correct){
	this.text = text;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
	this.correct = correct;
}

var q1 = new Question("Какое растение существует на самом деле?","Лох чилийский","Лох индийский","Лох аргентинский","Лох русский","answer2");
var q2 = new Question("Что проводит боксер, наносящий удар противнику снизу?","Свинг","Хук","Апперкот","Джеб","answer3");
var q3 = new Question("Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»?","сделать сегодня","сделать послезавтра","сделать через месяц","никогда не делать","answer1");
var q4 = new Question("Какой наряд прославил баснописец Крылов?","ивашкин армяк","прошкин зипун","машкин сарафан","тришкин кафтан","answer4");
var q5 = new Question("Как звали старшую сестру императора Петра Первого?","Вера","Людмила","Софья","Екатерина","answer3");
var q6 = new Question("Что не бывает морским?","огурец","рельс","гребешок","узел","answer2");
var q7 = new Question("Кого с большим основанием можно назвать островитянами?","алеутов","эвенков","чукчей","якутов","answer1");
var q8 = new Question("В какой стране появилась мандолина?","Испания","Италия","Венгрия","Греция","answer2");
var q9 = new Question("Как жители Лондона прозвали небоскреб Мэри-Экс, спроектированный Норманом Фостером?","корнишон","баклажан","кабачок","патиссон","answer1");
var q10 = new Question("Какой врач первым в истории русской медицины применил гипсовую повязку?","Субботин","Пирогов","Боткин","Склифосовский","answer2");
var q11 = new Question("Где в Древней Греции можно было увидеть надпись: «Здесь живут мертвые и говорят немые»?","кладбища","больницы","библиотеки","тюрьмы","answer3");
var q12 = new Question("Кто был одним из авторов сценария фильма «Музыкальная история» с Сергеем Лемешевым в главной роли?","Илья Ильф","Евгений Петров","Михаил Зощенко","Аркадий Аверченко","answer2");
var q13 = new Question("С чем часто охотятся на рыбу протоптера между сезонами дождей?","с сетями","с сачками","с ружьями","с лопатами","answer4");
var q14 = new Question("Каким видом спорта серьезно увлекался французский летчик Ролан Гаррос?","пинг-понгом","поло","гольфом","регби","answer4");
var q15 = new Question("Что такое лобогрейка?","жнейка","шапка","болезнь","печка","answer1");

var qMas = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];