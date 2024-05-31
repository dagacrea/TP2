const listado = document.getElementById("listado");
const mostrar = document.getElementById("mostrar");
const tareasDiv = document.getElementById("tareas");
const tareasDe = document.getElementById("TareasDe");
let Personas = false;

mostrar.addEventListener("click", async () => {
    if (!Personas) {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (res.ok) {
            console.log("¡Llegaron los datos!");
            const personas = await res.json();
            listado.innerHTML = ''; 
                    tareasDiv.innerHTML = ''; 
                    tareasDe.textContent = 'Tareas'; 
                    personas.forEach((persona) => {
                        const item = document.createElement("li");
                        item.classList.add("usuario");
                        item.innerHTML = `
                        id: ${persona.id} - Nombre: ${persona.name} - Nombre de usuario: ${persona.username} - Email: ${persona.email} - Página web: ${persona.website}<button onclick="verTareas(${persona.id}, '${persona.name}')">Ver tareas</button>`;
                        listado.appendChild(item);
                    });
                } else {
                    console.error("Error: faltaron los datos");
                }
                mostrar.textContent = 'Ocultar personas';
            } else {
                listado.innerHTML = ''; 
                mostrar.textContent = 'Mostrar personas';
            }
            Personas = !Personas;
        });

        async function verTareas(userId, userName) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
            if (res.ok) {
                const tareas = await res.json();
                mostrarTareas(tareas);
                tareasDe.textContent = `Tareas de ${userName}`; 
            } else {
                console.error("Error: no se pudieron obtener las tareas");
            }
        }

        function mostrarTareas(tareas) {
            tareasDiv.innerHTML = ''; 
            tareas.forEach((tarea) => {
                const tareaDiv = document.createElement("div");
                tareaDiv.classList.add(tarea.completed ? "tarea-completada" : "tarea-pendiente");
                tareaDiv.innerHTML = `
                <p><strong>Tarea:</strong> ${tarea.title}</p>`;
                tareasDiv.appendChild(tareaDiv);
            });
        }