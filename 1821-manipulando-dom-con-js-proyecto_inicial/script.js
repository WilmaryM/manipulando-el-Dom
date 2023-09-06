
const btn = document.querySelector('[data-form-btn]');

//arrow functions O funcion anonima
const creatTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = " "
    //backtick o template string
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task"> ${value} </span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
   task.innerHTML = content;
//Colocar un elemento hijo dentro del elemento padre utilizando el método appendChild
   list.appendChild(task);

    console.log(content);
};
console.log(btn);

btn.addEventListener("click", creatTask); 