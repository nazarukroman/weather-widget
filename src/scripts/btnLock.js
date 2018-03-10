;(function() {
  document.addEventListener('DOMContentLoaded', function() {
    let submitButton = document.getElementsByClassName('btn-timeout');

    for(let i = 0; i < submitButton.length; i++) {
      let timeout = parseInt(submitButton[i].getAttribute('timeout'));
      if(!timeout)
        continue;

      submitButton[i].addEventListener('click', function(event) {
        event.target.setAttribute('disabled', 'disabled');
        let timeout = parseInt(event.target.getAttribute('timeout'));
        setTimeout(function() {
          event.target.removeAttribute('disabled');
        }, timeout * 500);
      });
    }
  });
})();