
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
    element.classList.toggle("far")
};

export default checkComplete