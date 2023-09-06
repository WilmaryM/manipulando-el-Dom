
    import checkComplete from "./componentes/compleTask.js";
    import deleteIcon from "./componentes/deleteTask.js";

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
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());//Utilizar el atributo parentElement para subir un elemento en el árbol del DOM
    taskContent.appendChild(titleTask);

   
    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task); 
  };
   


btn.addEventListener("click", creatTask); 

