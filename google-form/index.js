$(document).ready(() => {
  const email = $("input[type='email']");
  const pEmail = $("input[type='email'] + p");

  const password = $("input[type='password']");
  const pPassword = $("input[type='password'] + p");

  email.focusout(() => {
    if (email.val()) {
      pEmail.addClass("active");
    } else {
      pEmail.removeClass("active");
    }
  });

  password.focusout(() => {
    if (password.val()) {
      pPassword.addClass("active");
    } else {
      pPassword.removeClass("active");
    }
  });
});
