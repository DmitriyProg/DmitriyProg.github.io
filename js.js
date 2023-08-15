const button = document.querySelector('button');
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
	var l1 = true;
	var l2 = true;
	var l3 = true;

	while (isSunk == false) {
		guess = prompt("Это мини игра морской бой :) Представь, что в 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Стреляй! (введи число 0-6):");
		if (guess == null) {break} 
		else {
			if (guess < String.fromCharCode(48) || guess > String.fromCharCode(54) || guess > 9){
				alert("Необходимо ввести цифру от 0 до 6");
			} else {
					guesses = guesses + 1;
			if (guess == location1 && l1==true){
				alert("Попал");
				hits = hits + 1;
				l1 = false;
			} else if (guess == location1 && l1==false){
				alert("Вы уже стреляли в эту клетку! Ищите корабль в других клетках!");
				} else if (guess == location3 && l3==true){
					alert("Попал");
					hits = hits + 1;
					l3 = false;
				} else if (guess == location3 && l3==false){
					alert("Вы уже стреляли в эту клетку! Ищите корабль в других клетках!");
					} else if (guess == location2 && l2==true){
						alert("Попал");
						hits = hits + 1;
						l2 = false;
					} else if (guess == location2 && l2==false){
						alert("Вы уже стреляли в эту клетку! Ищите корабль в других клетках!");
						} else {
							alert("Мимо");
						} if (hits == 3) {
							isSunk = true;
							alert("Корабль потоплен");
						} 		
			}
		}}
		if (hits != 0) {var stats = "Ты справился за " + guesses + " попыток. Твоя точность равна " + N[(3 / guesses)];
		alert(stats);}
	}
document.getElementById('game').onclick = Battle;
