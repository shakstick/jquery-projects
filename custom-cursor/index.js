$(document).ready((e) => {
  $(".cursor").css({
    top: `${e.clientY - 15}px`,
    left: `${e.clientX - 15}px`,
  });
  $(document).mousemove(function (e) {
    $(".cursor").css({
      top: `${e.clientY - 15}px`,
      left: `${e.clientX - 15}px`,
    });
  });
});
