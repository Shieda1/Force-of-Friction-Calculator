// https://calculator.swiftutors.com/force-of-friction-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const forceoffrictionRadio = document.getElementById('forceoffrictionRadio');
const coefficientoffrictionRadio = document.getElementById('coefficientoffrictionRadio');
const massofthebodyRadio = document.getElementById('massofthebodyRadio');

let forceoffriction;
const g = 9.80665;
let coefficientoffriction = v1;
let massofthebody = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

forceoffrictionRadio.addEventListener('click', function() {
  variable1.textContent = 'Coefficient of friction';
  variable2.textContent = 'Mass of the body (kg)';
  coefficientoffriction = v1;
  massofthebody = v2;
  result.textContent = '';
});

coefficientoffrictionRadio.addEventListener('click', function() {
  variable1.textContent = 'Force of friction (kg.m/s²)';
  variable2.textContent = 'Mass of the body (kg)';
  forceoffriction = v1;
  massofthebody = v2;
  result.textContent = '';
});

massofthebodyRadio.addEventListener('click', function() {
  variable1.textContent = 'Force of friction (kg.m/s²)';
  variable2.textContent = 'Coefficient of friction';
  forceoffriction = v1;
  coefficientoffriction = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(forceoffrictionRadio.checked)
    result.textContent = `Force of friction = ${computeForceoffriction().toFixed(2)} kg.m/s²`;

  else if(coefficientoffrictionRadio.checked)
    result.textContent = `Coefficient of friction = ${computeCoefficientoffriction().toFixed(2)}`;

  else if(massofthebodyRadio.checked)
    result.textContent = `Mass of the body = ${computeMassofthebody().toFixed(2)} kg`;
})

// calculation

function computeForceoffriction() {
  return Number(coefficientoffriction.value) * (Number(massofthebody.value) * g);
}

function computeCoefficientoffriction() {
  return Number(forceoffriction.value) / (Number(massofthebody.value) * g);
}

function computeMassofthebody() {
  return Number(forceoffriction.value) / (Number(coefficientoffriction.value) * g);
}