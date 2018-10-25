
console.log('connected')

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#Easybtn');
var hardBtn = document.querySelector('#Hardbtn');

easyBtn.addEventListener('click', function(){
easyBtn.classList.add('selected')
hardBtn.classList.remove('selected')
numSquares = 3
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent= pickedColor;
for(var i = 0; i < squares.length; i++){
  if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
  } else {
    squares[i].style.display = "none";
  }
}
});

hardBtn.addEventListener('click', function(){
hardBtn.classList.add('selected');
easyBtn.classList.remove('selected');
numSquares = 6
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent= pickedColor;
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});


resetButton.addEventListener('click', function(){
  this.textContent = "New Colors"
  message.textContent = " ";
// generate all new color
colors = generateRandomColors(numSquares);
// pick new random color from an array
pickedColor = pickColor();
// change colors of squares
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = 'steelblue';
})
// disply RGB as text
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
// add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

// add event listener
  squares[i].addEventListener('click', function(){
    // grab color of clicked squares
var clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if(clickedColor === pickedColor){
    messageDisplay.textContent = 'Correct!';
    changeColors(clickedColor);
    h1.style.backgroundColor = clickedColor;
    resetButton.textContent = "Play Again?"
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = 'Try Again';
    }

  });
}
// change colors of squares to pick colors
function changeColors(color) {
  // loop through all squares
  for(var i = 0; i < colors.length; i++) {
    // change color of all squares
    squares[i].style.backgroundColor = color
  }
}

function pickColor(){
var random =  Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num) {
// make an array
var arr = []
// add random numbers to array
for(var i = 0; i < num; i++) {
arr.push(randomColor())
}
// return that array
return arr;
}

function randomColor(){
  // pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
