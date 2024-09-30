document.addEventListener('DOMContentLoaded', function() {
    const requests = [
        { name: 'John Doe', request: 'Quiero ser un héroe para enseñar matemáticas.' },
        { name: 'Jane Smith', request: 'Me gustaría ser un héroe para entrenar a otros.' },
    
    ];

    const hprTableBody = document.querySelector('#hprTable tbody');

    function renderRequests(requests) {
        hprTableBody.innerHTML = '';
        requests.forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.name}</td>
                <td>${request.request}</td>
                <td>
                    <button class="approve" onclick="approveRequest('${request.name}')">Aprobar</button>
                    <button class="reject" onclick="rejectRequest('${request.name}')">Rechazar</button>
                </td>
            `;
            hprTableBody.appendChild(row);
        });
    }

    window.approveRequest = function(name) {
        alert(`Solicitud de "${name}" aprobada`);

    };

    window.rejectRequest = function(name) {
        alert(`Solicitud de "${name}" rechazada`);
    };


    renderRequests(requests);
});