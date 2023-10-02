const counter = document.getElementById('counter');
const valueRef = document.getElementById('value');
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');


let counterValue = 0;


const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};


const decrement = () => {
  counterValue -= 1;
  valueRef .textContent = counterValue;
};


incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);