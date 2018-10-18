//hide output div
document.querySelector('#output').style.visibility = 'hidden';

//select input element
const lbsInput = document.querySelector('#lbsInput');

//add event listener to input element
lbsInput.addEventListener('input', enterWeight);

//write function to listen for input
function enterWeight(e){
  document.querySelector('#output').style.visibility = 'visible';
  let lbs = e.target.value;
  document.querySelector('#gramsOuput').innerHTML = lbs/0.0022046;
  document.querySelector('#kgOuput').innerHTML = lbs/2.2046;
  document.querySelector('#ozOuput').innerHTML = lbs*16;
}