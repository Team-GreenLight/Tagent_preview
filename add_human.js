window.onload = init;

function init() {
	const group_plus = document.getElementById("profile-plus-group");
	const groups = document.getElementById("group-field");
	
	const tag_plus = document.getElementById("profile-plus");
	const tags = document.getElementById("tag-field");
	const next_btn = document.getElementById("next");

	const profile = {
		"id": `${new Date().getMilliseconds()}`,
		"name": "",
		"call": "",
		"age": "",
		"mbti": "",
		"email": "",
		"tags": "",
		"group": "",
	};


	group_plus.addEventListener("click", () => {
		const group_input = document.getElementById("group-plus");
		if (group_input.value == "") {
			alert("그룹 태그는 공백이 될 수 없습니다!");
			group_input.value = "#";
			return;
		}
		groups.innerHTML += " " + group_input.value;		
		group_input.value = "#";
	});

	tag_plus.addEventListener("click", () => {
		const tag_input = document.getElementById("tag-plus");
		if (tag_input.value == "") {
			alert("태그는 공백이 될 수 없습니다!");
			tag_input.value = "#";
			return;
		}
		tags.innerHTML += " " + tag_input.value;		
		tag_input.value = "#";
	});

	next_btn.addEventListener("click", () => {
		const inputs = document.getElementsByClassName("input-field");

		for (const input of inputs) {
			profile[input.name] = input.value || "?";
		}
		profile["tags"] = tags.innerHTML;
		profile["group"] = groups.innerHTML;
		
		if (!localStorage.getItem("friends")) {
			localStorage.setItem("friends", JSON.stringify({
				"friends": [],
			}));
		}

		const current = JSON.parse(localStorage.getItem("friends"));

		current.friends.push(profile);

		localStorage.setItem("friends", JSON.stringify(current));

		window.location.href = "main.html";
	});
}