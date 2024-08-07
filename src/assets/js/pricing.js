const leftOption = document.querySelector("#pricing #option1");
const rightOption = document.querySelector("#pricing #option2");
const toggle = document.querySelector("#pricing .toggle");
const cardGroup = Array.from(document.querySelectorAll('#pricing .ul-wrapper'));

function togglePlans() {
  for (const item of cardGroup) {
    item.classList.toggle("active");
  }
  toggle.classList.toggle("active");
}

function activateLeftOption() {
  for (const item of cardGroup) {
    item.classList.remove("active");
  }
  toggle.classList.remove("active");
}

function activateRightOption() {
  for (const item of cardGroup) {
    item.classList.add("active");
  }
  toggle.classList.add("active");
}

function handleKeyDown(event, action) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    action();
  }
}

toggle.addEventListener('click', togglePlans);
toggle.addEventListener('keydown', (event) => handleKeyDown(event, togglePlans));

leftOption.addEventListener('click', activateLeftOption);
leftOption.addEventListener('keydown', (event) => handleKeyDown(event, activateLeftOption));

rightOption.addEventListener('click', activateRightOption);
rightOption.addEventListener('keydown', (event) => handleKeyDown(event, activateRightOption));
