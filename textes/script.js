// Wrap every letter in a span
var textWrapper = document.querySelector('.anim1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
	.add({
		targets: '.anim1 .letter',
		translateY: ["1.1em", 0],
		translateX: ["0.55em", 0],
		translateZ: 0,
		rotateZ: [180, 0],
		duration: 750,
		easing: "easeOutExpo",
		delay: (el, i) => 50 * i
	});