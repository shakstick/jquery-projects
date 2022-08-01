$(document).ready(() => {
	const line = $(".border-line");

	$("#home i").click(() => {
		$("#home").toggleClass("active");
		$("#home").siblings().removeClass("active");
		$(window).width() > 1150 ? line.css("left", "6%") : line.css("left", "10%");
	});
	$("#search i").click(() => {
		$("#search").toggleClass("active");
		$("#search").siblings().removeClass("active");
		$(window).width() > 1150
			? line.css("left", "33.35%")
			: line.css("left", "34.35%");
	});
	$("#likes i").click(() => {
		$("#likes").toggleClass("active");
		$("#likes").siblings().removeClass("active");
		$(window).width() > 1150
			? line.css("left", "59.5%")
			: line.css("left", "57.2%");
	});
	$("#user i").click(() => {
		$("#user").toggleClass("active");
		$("#user").siblings().removeClass("active");
		$(window).width() > 1150
			? line.css("left", "84%")
			: line.css("left", "77.5%");
	});
});
