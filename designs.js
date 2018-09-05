// Select color input
let color = document.getElementById('colorPicker').value;

// Select size input
let sizePicker = document.getElementById('sizePicker');



// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit',function(event){
  event.preventDefault();
  let inputHeight = document.getElementById('inputHeight').value;
  let inputWidth = document.getElementById('inputWidth').value;
  makeGrid(inputHeight,inputWidth);
})


function makeGrid() {


// Your code goes here!

}
