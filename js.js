let toDoList = [];
let listAdd = document.querySelector('.to-do-input');
let listAppend = document.querySelector('.to-do-list');
const darkBtn = document.querySelector('.header-img');
const lightBtn = document.querySelector('.darck-img');
const cont = document.querySelector('.cont');

function add() {
  listAdd.addEventListener('keyup', function(event) {
    if (event.keyCode === 13){
      const newToDo = listAdd.value.trim();
      if (newToDo !== '') {
        toDoList.push(newToDo);
        addRemove();
      }
      listAdd.value = '';
    } 
  });
}

function remove(index){
  if (index >= 0 && index < toDoList.length) {
    toDoList.splice(index,1);
    addRemove();
  }
}

function addRemove(){
  listAppend.innerHTML = '';
  toDoList.forEach((todo, i) => {
    listAppend.innerHTML += `<div> ${i + 1}) ${todo} <span id="del" onclick="remove(${i})">X</span> </div> `;
  });
}

add();

function darkMode(){
  darkBtn.addEventListener('click', function() {
    if (cont.style.backgroundImage === 'url("./images/bg-desktop-light.jpg")'){
      cont.style.backgroundImage = 'url("./images/bg-desktop-dark.jpg")';
    }
    else {
      cont.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")';
    }
  });
}

darkMode();


function toggleDarkMode(){
    const body = document.querySelector('body');

    if (body.classList.contains('dark-mode')){
      body.classList.remove('dark-mode');
      lightBtn.style.display = 'none';
      darkBtn.style.display = 'flex';
      body.style.backgroundColor = 'white'
    } else {      
      body.classList.add('dark-mode');
      lightBtn.style.display = 'flex';
      darkBtn.style.display = 'none';
      body.style.backgroundColor = 'black'
    }
  }
  
