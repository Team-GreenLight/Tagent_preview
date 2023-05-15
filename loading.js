window.onload = init;

function addVcProfiles() {
	const vc_names = [
		"최태환",
		"정우진",
		"오세범",
	];

	const vc_calls = [
		"???-????-????",
		"???-????-????",
		"???-????-????",
	];

	const vc_ages = [
		"21",
		"20",
		"22",
	];

	const vc_mbtis = [
		"????",
		"????",
		"????",
	];

	const vc_emails = [
		"????@????.???",
		"????@????.???",
		"????@????.???",
	];

	const vc_tags = [
		" #수석_심사역 #😊 #😁",
		" #수석_심사역 #👍",
		" #수석_심사역 #👌 #😊",
	];

	const vc_groups = [
		" #미래에셋벤처투자",
		" #미래에셋벤처투자",
		" #미래에셋벤처투자",
	];

	if (!localStorage.getItem("friends")) {
		localStorage.setItem("friends", JSON.stringify({
			"friends": [],
		}));
	}

	const current = JSON.parse(localStorage.getItem("friends"));

	for (let i = 0; i < 3; i++) {
		const profile = {
			"id": `${new Date().getMilliseconds()}`,
			"name": vc_names[i],
			"call": vc_calls[i],
			"age": vc_ages[i],
			"mbti": vc_mbtis[i],
			"email": vc_emails[i],
			"tags": vc_tags[i],
			"group": vc_groups[i],
		};

		current.friends.push(profile);
	}
	localStorage.setItem("friends", JSON.stringify(current));
}

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

	addVcProfiles();

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