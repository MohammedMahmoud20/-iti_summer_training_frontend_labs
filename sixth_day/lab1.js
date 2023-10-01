 // Function to open the small window :-
 function openWindow() {
    var text = "Welcome to JS";
    var index = 0;
    var popup = window.open("", "child", "width=300,height=300");

    var interval = setInterval(function() {
      popup.document.body.innerHTML += text[index];
      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setTimeout(function() {
          popup.close();
        }, 1000);
      }
    }, 1000);
  }
  window.onload = openWindow;


