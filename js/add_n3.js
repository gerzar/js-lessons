/* 
Написать программу, которая последовательно запрашивает у пользователя числа при помощи prompt, 
пока он не нажмет “Отмена”. После нажатия “Отмена”, программа выводит сумму введенных чисел при помощи alert. 
Если пользователь ввел не число (а, например, строку), то это значение не суммируется с остальными.
*/
var a;
var result = 0;
while( a = +prompt("Введите число:")){
	result += a;
	console.log(result);
}
alert(result);