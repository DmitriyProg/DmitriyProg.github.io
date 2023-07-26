// Это объявление переменной, мы наши кнопку по тегу 
const button = document.querySelector('button');

// Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику 
button.addEventListener('click', function() {
	alert('Дорогу осилит идущий (^v^) ')
})

function Battle() {
	var randomLoc = Math.floor(Math.random() * 5);
	var location1 = randomLoc;
	var location2 = location1 + 1;
	var location3 = location2 + 1;
	var guess;
	var hits = 0;
	var guesses = 0;
	var isSunk = false;

while (isSunk == false) {
	guess = prompt("Это мини игра морской бой :) Представь, что в 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):");
	if (guess == null) {break} 
	else {
		if (guess < String.fromCharCode(48) || guess > String.fromCharCode(54) || guess > 9){
			alert("Необходимо ввести цифру от 0 до 6");
		} else {
				guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Попал");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Корабль потоплен");
			}
		} else {
			alert("Мимо");
		}		
		}
    }}
	if (hits != 0) {var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses);
	alert(stats);}
}
document.getElementById('game').onclick = Battle;
