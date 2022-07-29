$(document).ready(() => {
  $("button").click(() => {
    navigator.clipboard.writeText($("textarea").val());
    // $("textarea").select();
    // document.execCommand("copy");

    $("p").fadeIn(400);
    $("p").addClass("gelatine");
    $("p").fadeOut(1000);
  });
});
