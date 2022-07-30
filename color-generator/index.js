const randomNumber = () => Math.floor(Math.random() * 255);

const generateColor = () => [randomNumber(), randomNumber(), randomNumber()];

const rgb2hex = (rgb) =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
    .join("")}`;

const setColor = () => {
  const color = generateColor();
  const textColor = `rgb(${color[0]},${color[1]},${color[2]})`;
  $("#input").val(rgb2hex(textColor));
  $(".left").css("background-color", textColor);
  $(".icon").css("background-color", textColor);
  $("#input").css("border-color", textColor);
  $("#input").css("color", textColor);
};

setColor();

$("#generate").click(setColor);
$(".icon").click(() => {
  $("#input").select();
  document.execCommand("copy");
});
