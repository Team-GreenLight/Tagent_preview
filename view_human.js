window.onload = init;

function init() {
	const url = new URL(window.location.href);
	const urlParams = url.searchParams;

	const id = urlParams.get("id");

	const friends = JSON.parse(localStorage.getItem("friends")).friends;
	
	for (const friend of friends) {
		if (friend.id == id) {
			const fields = document.getElementsByClassName("input-field");

			for (const p of fields) {
				p.innerHTML = p.id + " : " +  friend[p.id];
			}
			document.getElementById("tag-field").innerHTML = friend.tags;
			document.getElementById("group-field").innerHTML = friend.group;
		}
	}
}