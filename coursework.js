/////////////////////////////NAVIGATION//////////////////////////
const nav = document.querySelector('.nav');

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

////////////////////cLOCK///////////////////////

setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const hourMinute = document.querySelector('[data-minute-hand]');
const hourSecond = document.querySelector('[data-second-hand]');

function setClock() {
  const currentData = new Date();
  const secondRatio = currentData.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentData.getMinutes()) / 60;
  const hoursRatio = (minuteRatio + currentData.getHours()) / 12;
  setRotation(hourSecond, secondRatio);
  setRotation(hourMinute, minuteRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRation) {
  element.style.setProperty('--rotation', rotationRation * 360);
}

setClock();

//////////////////////// Save input////////////////////////////

const inputBtn = document.getElementById('input-btn');
let myLeads = [];
const ulEl = document.getElementById('ul-el');
const inputEl = document.getElementById('input-el');

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = null;
  renderLeads();
});

function renderLeads() {
  let listItems = '';
  for (i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
    listItems +=
      "<li class='list-items'><a target = '_blank' href = ''>" +
      myLeads[i] +
      '</a></li>';
    ulEl.innerHTML = listItems;
    // ulEl.innerHTML += "<li>" + myLeads[i] + " " + "</li>";
  }
}

//////////////////////////// OPEN AN ACCOUNT//////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////// Read Me section/////////////////////
