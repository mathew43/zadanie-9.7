var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

pick.Rock.addEventListener('click', function() {playerPick('rock')});
pick.Paper.addEventListener('click', function() {playerPick('paper')});
pick.Scissors.addEventListener('click', function() {playerPick('scissors')});