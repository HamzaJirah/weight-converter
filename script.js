//hide output div
document.querySelector('#output').style.visibility = 'hidden';

const lbsInput = document.querySelector('#lbsInput');

lbsInput.addEventListener('input', enterWeight);

function enterWeight(e){
  let lbs = e.target.value;
  document.querySelector('#gramsOuput').innerHTML = lbs/0.0022046;
  document.querySelector('#kgOuput').innerHTML = lbs/2.2046;
  document.querySelector('#ozOuput').innerHTML = lbs*16;
}