const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	speed: 1000,
	parallax: true,
	spaceBetween: 30,
	//autoplay
	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: false,
	// },

	// If we need pagination
	// pagination: {
	//   el: ".swiper-pagination",
	//   clickable: true,
	// },

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	// scrollbar: {
	// 	el: ".swiper-scrollbar",
	// },
});
