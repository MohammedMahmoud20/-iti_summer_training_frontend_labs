// Function to update the counter and page title from 1 - 12 :-
function updateCounter() {
    var counter = 1;
    var titleElement = document.getElementsByTagName("title")[0];
    var numberElement = document.getElementById("counter");

    var interval = setInterval(function() {
      numberElement.innerHTML += '<div class="number">' + counter + '</div>';
      titleElement.innerHTML = counter;

      if (counter === 32) {
        clearInterval(interval);
      }

      counter++;
    }, 1000);
  }
  window.onload = updateCounter;