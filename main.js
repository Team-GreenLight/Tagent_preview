window.onload = init;

function loadSelfInfo() {
	const properties = document.getElementsByClassName("profile-property");

	for (const property of properties) {
		property.innerHTML = localStorage.getItem("self-" + property.id) || "아직 설정되지 않았습니다.";
	}
}

function loadFriendsInfo() {
	const friends = JSON.parse(localStorage.getItem("friends")).friends;
	for (const friend of friends) {
		const info = document.createElement("li");
		info.className = "info";
		info.id = friend.id;
		
		const img = document.createElement("img");
		img.src = "https://via.placeholder.com/100X100";
		
		info.append(img);

		const description = document.createElement("div");
		description.className = "description";

		const name = document.createElement("h4");
		name.innerHTML = `${friend.name}(${friend.age}) #${friend.mbti}`;

		description.append(name);

		const group_tag = document.createElement("i");
		group_tag.className = "fa fa-users group";
		group_tag.innerHTML = " " + friend.group.split(" ")[1];
		console.log(friend.group.split(" "));

		description.append(group_tag);
		description.append(document.createElement("br"));

		const tag = document.createElement("i");
		tag.className = "fa fa-tag";
		tag.innerHTML = " " + friend.tags.split(" ")[1];

		description.append(tag);
		
		info.append(description);

		info.addEventListener("click", () => {
			console.log("?");
			window.location.href = "view_human.html?id=" + friend.id;
		});

		document.getElementById("list").append(info);
	}
}

function init() {
	loadSelfInfo();
	loadFriendsInfo();
}