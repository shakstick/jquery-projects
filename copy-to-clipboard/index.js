$("button").click(() => {
  navigator.clipboard.writeText($("textarea").val());
  $("p").show();
  $("p").fadeIn(500);
  $("p").fadeOut(750);
});
