
const addTask = () => {
    // Obtiene el elemento input en lugar de su valor directamente
    let taskInput = document.getElementById('task');
    let taskValue = taskInput.value;
    const listTask = document.getElementById('list');
    const registeredTask = document.getElementById('registered-tasks');

    if(taskValue){

        const newTask = document.createElement('div');
        newTask.className = 'newTask';
        newTask.id = 'taskValid';
        registeredTask.appendChild(newTask);

        //Agregamos un parrafo con el valor del imput
        const createTextTask = document.createElement('p');
        createTextTask.textContent = taskValue;
        newTask.appendChild(createTextTask);


        //Crear div para los botones
        const btnsDiv = document.createElement('div');
        btnsDiv.className = 'btnsDiv';
        newTask.appendChild(btnsDiv);

        //Crear boton de borrar
        const btnDelete = document.createElement('button');
        btnDelete.id = 'btnDelete';
        btnDelete.textContent = 'Borrar';
        btnsDiv.appendChild(btnDelete);


        //Crear boton de para actualizar
        const btnUpdate = document.createElement('button');
        btnUpdate.id = 'btnUpdate';
        btnUpdate.textContent = 'Actualizar';
        btnsDiv.appendChild(btnUpdate)


        // Añadir event listener para el botón de borrar
        btnDelete.addEventListener('click', function() {
            // Eliminar el elemento padre del botón de borrar (que es newTask)
            const confirmDelete = confirm('¿Desea borrar esta tarea?');
            if(confirmDelete){
                newTask.remove();
            }
        });


        //Actulizar Tareas
        btnUpdate.addEventListener('click', function() {
            // Obtener el elemento párrafo dentro de newTask para actualizar su contenido
            const paragraph = newTask.querySelector('p');
            const taskUpdate = prompt('Ingresa la nueva tarea', paragraph.textContent);

            // Verificar si el usuario ingresó un nuevo contenido
            if (taskUpdate !== null && taskUpdate !== '') {
                // Actualizar el contenido del párrafo
                paragraph.textContent = taskUpdate;
            }
        });

        // Limpia el valor del input
        taskInput.value = '';
    }
    else{
        alert('Ups, ingresa algo en el input');
    }


}
