document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});

const eventForm = document.getElementById('event-form');
const eventList = document.getElementById('event-list');

eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo-evento').value;
    const invitados = document.getElementById('invitados-evento').value;
    const fecha = new Date(document.getElementById('fecha-evento').value);
    const formattedFecha = `${fecha.toLocaleDateString()} ${fecha.getHours().toString().padStart(2, '0')}:${fecha.getMinutes().toString().padStart(2, '0')}`;
    const zonaHoraria = document.getElementById('zona-horaria-evento').value;
    const descripcion = document.getElementById('descripcion-evento').value;

    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');
    eventItem.innerHTML = `
        <h4>${titulo}</h4>
        <p><strong>Invitados:</strong> ${invitados}</p>
        <p><strong>Fecha y Hora:</strong> ${formattedFecha}</p>
        <p><strong>Zona Horaria:</strong> ${zonaHoraria}</p>
        <p><strong>Descripción:</strong> ${descripcion}</p>
    `;

    eventList.appendChild(eventItem);
    eventForm.reset();
});

// Similar logic for ubicaciones and contactos...
