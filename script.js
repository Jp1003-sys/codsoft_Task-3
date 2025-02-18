let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        document.querySelector('input').value = string;
      } catch (error) {
        string = "Error"; 
        document.querySelector('input').value = string;
      }
    }
    else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == '←') {
      if (typeof string === 'number' || string === "Error") {
        string = "";
      } else {
        string = string.slice(0, -1);
      }
      document.querySelector('input').value = string;
    }
    else {
      if (typeof string === 'number' || string === "Error") {
        string = "";
      }
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});