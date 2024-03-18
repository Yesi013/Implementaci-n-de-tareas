let tareas = [];

function agregarTarea() {
    const entradaDeTarea = document.getElementById('taskInput');
    const nombreTarea = entradaDeTarea.value.trim();
    
    if (nombreTarea !== '') {
        tareas.push({ name: nombreTarea, completed: false });
        entradaDeTarea.value = '';
        verTarea();
    }
}

function borrarTarea(index) {
    tareas.splice(index, 1);
    verTarea();
}

function alternarTarea(index) {
    tareas[index].completed = !tareas[index].completed;
    verTarea();
}

function filtroTarea(filtro) {
    let filtrarTareas = [];
    if (filtro === 'all') {
        filtrarTareas = tareas;
    } else if (filtro === 'pending') {
        filtrarTareas = tareas.filter(tarea => !tarea.completed);
    } else if (filtro === 'completed') {
        filtrarTareas = tareas.filter(tarea => tarea.completed);
    }
    verTarea(filtrarTareas);
}

function verTarea(tareasMostradas = tareas) {
    const listaTareas = document.getElementById('taskList');
    listaTareas.innerHTML = '';
    tareasMostradas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${tarea.completed ? 'checked' : ''} onchange="alternarTarea(${index})">
            <span class="${tarea.completed ? 'completed' : ''}">${tarea.name}</span>
            <button onclick="borrarTarea(${index})">borrar</button>
        `;
        listaTareas.appendChild(li);
    });
}

verTarea();
