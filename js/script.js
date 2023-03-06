$(document).ready(function(){
  $("#introModal").modal('show')
  $(".action-btn").click(function(){
    const form = $(this).attr("data-form");
    if (form === 'signUpForm') {
      $(`#loginForm`).addClass('d-none')
      $(`#signUpForm`).removeClass('d-none')
    } else {
      $(`#signUpForm`).addClass('d-none')
      $(`#loginForm`).removeClass('d-none')
    }
  });
  $('form').submit(function(event) {
    event.preventDefault();
    window.location = '/todo-app/home.html'
  })
});