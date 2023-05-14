window.onload = init;

function init() {
	const balls = document.getElementsByClassName("ball");

	let idx = 0;
	let dir = 1;

	const len = 2000;

	balls[0].style.left = "-30px";
	balls[1].style.left = "20px";
	balls[2].style.left = "70px";
	balls[3].style.left = "120px";
	balls[4].style.left = "170px";


	setInterval(() => {
		idx = (idx + dir) % len;
		
		for (let i = 0; i < 5; i++) {
			balls[i].style.bottom = - 60 + (Math.floor(Math.sin((idx - i * 30) / (len / 20) * Math.PI) * len) / 60) + "px";
		}
	}, 1);

	setTimeout(() => {
		window.location.href = "main.html?isLoaded=true";
	}, 4000);
}