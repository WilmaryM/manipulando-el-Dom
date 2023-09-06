//IIFE: Expresión de función ejecutada inmediatamente
( () => {
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

    const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task); 
  };
   


btn.addEventListener("click", creatTask); 

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far" ,"fa-check-square", "icon"  );
    i.addEventListener("click", completeTask)
    return i
};

const completeTask = (event) => {
    const element = event.target //Encontrar el objetivo del evento utilizando la propiedad target
    element.classList.toggle('fas') //Agregar la clase CSS utilizando el método toggle
    element.classList.toggle('completeIcon')
    element.class.toggle("far")
};

} ) ();