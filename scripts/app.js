
const addTask = () => {
    // Obtiene el elemento input en lugar de su valor directamente
    let taskInput = document.getElementById('task');
    let taskValue = taskInput.value;
    const listTask = document.getElementById('list');
    const registeredTask = document.getElementById('registered-tasks');


    event.preventDefault();

    if(taskValue){

        const newTask = document.createElement('div');
        newTask.className = 'newTask';
        newTask.id = 'taskValid';
        registeredTask.appendChild(newTask);

        Swal.fire({
            icon: "success",
            title: "Tu tarea ha sido registrada",
            showConfirmButton: false,
            timer: 1500
          });


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

            Swal.fire({
                title: "¿Deseas eliminar esta tarea?",
                text: "No podrás revertir estos cambios",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "Cancelar",
                confirmButtonText: "Si, borrar!"
              }).then((result) => {
                if (result.isConfirmed) {

                    newTask.remove();

                  Swal.fire({
                    title: "Tarea eliminada",
                    text: "Tu tarea se ha eliminado con exito! :)",
                    icon: "success"
                  });
                }
              });

        });


        //Actulizar Tareas
        btnUpdate.addEventListener('click', async function() {

            const paragraph = newTask.querySelector('p');
            const paragraphText = paragraph.textContent;
        
            const { value: text } = await Swal.fire({
                input: "textarea",
                inputLabel: "Actuliza tu tarea",
                inputPlaceholder: paragraphText,
                inputAttributes: {
                    "aria-label": "Actuliza tu tarea"
                },
                showCancelButton: true
            });
        
            if (text) {
                paragraph.textContent = text;
                Swal.fire({
                    icon: "success",
                    title: "Tarea actualizada",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        });

        // Limpia el valor del input
        taskInput.value = '';
    }
    else{
        // alert('Ups, ingresa algo en el input');
        Swal.fire("Ups, ingresa una tarea en el input");
    }


}
