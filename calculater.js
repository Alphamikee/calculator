let container = document.getElementById('container');
let display = document.getElementById('display');
let keys = document.getElementById('keys');
let output = document.getElementById('text');

let text = ' ';
let operators = / \.*|\.+|-|\/.|\./g;
function press(key) {
  let check = key.match(operators);
  let checkk = text[text.length - 1].match(operators);
  output.style.color = 'black';
  if (key === 'AC'){
   text = ' ';
   output.innerText = '';
  } else if ( text[text.length - 1] === '.'){
    text += key.toString();
    output.innerText = text;
  } else if ( text === ' ' && check !== null){
    text = ' ';
  } else if (checkk !== null && check !== null){
    output.innerText = text;
  } else if (key === 'C'){
    text = text.substring(0, text.length - 1);
    output.innerText = text;
  } else if ( key === 'C' & text[text.length - 1] === ' '){
    text = text.substring(0, text.length - 3);
    output.innerText = text;
  } else {
  text += key.toString();
  output.innerText = text;
  }
};
function operetor() {
  output.style.color = 'red';
  if (text != ''){
    let result = eval(text).toString();
    output.innerText = result;
    text = result;
  }
};
