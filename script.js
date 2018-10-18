const lbsInput = document.querySelector('#lbsInput');

lbsInput.addEventListener('input', enterWeight);

function enterWeight(e){
  let lbs = e.target.value;
  document.querySelector('#gramsOuput').innerHTML = lbs/0.0022046;
}