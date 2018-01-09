var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state'+state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	//countdown
	if (state == 2) {
		timer = setInterval(function() {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber;

			if (countdownNumber > 4 && countdownNumber <=7) {
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}

			if (countdownNumber <= 0) {
				changeState(3);
			}
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random()*10);
			//success
			if (randomNumber > 2) {
				changeState(4);
			} else {
				changeState(5); //oh no
			}
		}, 2000); 
	};
}