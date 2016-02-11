
// 1. When someone submits the form:
jQuery("form").submit(function() {
  // 2. Perform an AJAX request ($ is a shortcut for jQuery):
  $.ajax({
    // 3. Where to send data: use the URL from the form's action attribute
    url: $('form').attr('action'),
    // 4. What data to send: send the username specified in form input
    data: { username: $('input').val() },
    // 5. What to do if data submits successfully:
    success: function(result){
      // 6. Change the paragraph with an id 'message' to display a welcome message
      $('p#message').html('Thanks for registering your interest. We will write you to  ' + result.username + ' when we have a beta invite ready for you.');
      // 7. Hide the form now the user has checked in
      $('form').hide();
    } // END success
  }); // END ajax
  // 8. Allow form to submit without reloading the page
  event.preventDefault();
}) // END submit