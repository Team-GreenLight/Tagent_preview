window.onload = mbtiInit;

function mbtiInit() {
	const wrappers =  document.getElementsByClassName("mbti-wrapper");

	for (const wrapper of wrappers) {
		for (const btn of wrapper.children) {
			btn.addEventListener("click", event => {
				 for (const subbtn of wrapper.children) {
					subbtn.className = 'normal-mbti';
				}
				btn.className = 'clicked-mbti';
				idk.className = 'normal-mbti'
			});
		}
	
	}

	const idk = document.getElementById("mbti-idk");

	idk.addEventListener("click", () => {
		for (const wrapper of wrappers) {
			for (const btn of wrapper.children) {
				btn.className = 'normal-mbti';
			}
		}
		idk.className = (
			idk.className == 'normal-mbti'
		) ?
		"clicked-mbti" :
		"normal-mbti";

	});

	init();
}
