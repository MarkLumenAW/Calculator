export default function keyDownHandler(event) {
  let button;
  switch (event.key.toUpperCase()) {
    case '.':
      button = document.getElementById('decimal');
      break;
    case '0':
      button = document.getElementById('zero');
      break;
    case '1':
      button = document.getElementById('one');
      break;
    case '2':
      button = document.getElementById('two');
      break;
    case '3':
      button = document.getElementById('three');
      break;
    case '4':
      button = document.getElementById('four');
      break;
    case '5':
      button = document.getElementById('five');
      break;
    case '6':
      button = document.getElementById('six');
      break;
    case '7':
      button = document.getElementById('seven');
      break;
    case '8':
      button = document.getElementById('eight');
      break;
    case '9':
      button = document.getElementById('nine');
      break;
    case '/':
      button = document.getElementById('divide');
      break;
    case '*':
      button = document.getElementById('multiply');
      break;
    case '-':
      button = document.getElementById('subtract');
      break;
    case '+':
      button = document.getElementById('add');
      break;
    case 'ENTER':
      button = document.getElementById('equals');
      break;
    case 'ESCAPE':
      button = document.getElementById('clear');
      break;
    default:
      break;
  }

  if (button) {
    button.click();
  }

}

