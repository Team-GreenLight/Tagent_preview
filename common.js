window.onload = init;

const page_flow = [
	"index.html",
	"name.html",
	"phone_number.html",
	"gender.html",
	"birth_day.html",
	"mbti.html",
	"sync.html"
];

const run = {
	"index.html": () => {
	},
	"name.html": () => {
		const input = document.getElementById("name-input");
		localStorage.setItem("self-name", input.value);		
	},
	"phone_number.html": () => {
		const input = document.getElementById("call-input");
		localStorage.setItem("self-call", input.value);
	},
	"gender.html": () => {
		const radios = document.getElementsByClassName("gender-input");
		for (const radio of radios) {
			if (radio.checked) {
				localStorage.setItem("self-gender", radio.id);
			}
		}
	},
	"birth_day.html": () => {
		const input = document.getElementById("date-input");
		localStorage.setItem("self-date", input.value);
	},
	"mbti.html": () => {
		const idk_btn = document.getElementById("mbti-idk");
		if (idk_btn.className == "clicked-mbti") {
			localStorage.setItem("self-mbti", "????");
			return;
		}
		const mbti_wrappers = document.getElementsByClassName("mbti-wrapper");
		
		let mbti = "";

		for (const wrapper of mbti_wrappers) {
			let isValid = false;
			for (const btn of wrapper.children) {
				if (btn.className == "clicked-mbti") {
					isValid = true;
					mbti += btn.innerHTML;
					break;
				}
			}
			if (!isValid) {
				mbti += "?";
			}
		}
		localStorage.setItem("self-mbti", mbti);
	},
	"sync.html": () => {
	},
};

function init() {
	const urls = document.URL.split("/");
	
	let base_url = ""; 

	for (let i = 0; i < urls.length - 1; i++) {
		base_url += urls[i] + "/";
	}

	const current = document.URL.split("/").slice(-1)[0];
	const next = page_flow[Math.min(page_flow.length - 1, page_flow.indexOf(current) + 1)];
	const prev = page_flow[Math.max(0, page_flow.indexOf(current) - 1)];
	
	const next_btn = document.getElementById("next");
	const prev_btn = document.getElementById("prev");

	if (next_btn) {
		next_btn.addEventListener("click", () => {
			run[current]();
			window.location.href = base_url + next;
		});
	}

	if (prev_btn) {
		prev_btn.addEventListener("click", () => {
			window.location.href = base_url + prev;
		});
	}

	console.log("inited");
}