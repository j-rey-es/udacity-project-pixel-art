// Select color input
let color = document.getElementById('colorPicker');

// Select size input
let sizePicker = document.getElementById('sizePicker');



// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit',function(event){
  event.preventDefault();
  let inputHeight = document.getElementById('inputHeight').value;
  let inputWidth = document.getElementById('inputWidth').value;
  makeGrid(inputHeight,inputWidth);
})


function makeGrid(inputHeight,inputWidth) {
  let table = document.getElementById('pixelCanvas');
  table.innerHTML = ''; //clears old table out
  for (let i = 0; i < inputHeight; i++){
    let newRow = table.insertRow();
    for (let j = 0; j < inputWidth; j++){
      let newCell = newRow.insertCell();
      newCell.onclick = changeColor;
    }
  }
}
function changeColor(){
  this.style.background = color.value;
}
// Your code goes here!
