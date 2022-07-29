$(document).ready(() => {
  const time = () => {
    const dt = new Date();
    let hour = dt.getHours();
    const minute = dt.getMinutes();
    const second = dt.getSeconds();
    let session;

    if (hour > 12) {
      hour -= 12;
      session = "PM";
    } else {
      session = "AM";
    }

    $(".hour-number").text(hour);
    $(".minute-number").text(minute);
    $(".second-number").text(second);
    $("session-number").text(session);
    setTimeout(time, 1000);
  };
  time();
});
