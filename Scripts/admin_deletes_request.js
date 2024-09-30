document.addEventListener('DOMContentLoaded', function() {
    const requests = [
        { description: 'Enseñar matemáticas', heroCivil: 'Superman & John Doe' },
        { description: 'Entrenamiento físico', heroCivil: 'Wonder Woman & Jane Doe' },

    ];

    const requestTableBody = document.querySelector('#requestTable tbody');

    function renderRequests(requests) {
        requestTableBody.innerHTML = '';
        requests.forEach(request => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${request.description}</td>
                <td>${request.heroCivil}</td>
                <td>
                    <button class="approve" onclick="approveRequest('${request.description}')">Aprobar</button>
                    <button class="delete" onclick="deleteRequest('${request.description}')">Eliminar</button>
                </td>
            `;
            requestTableBody.appendChild(row);
        });
    }

    window.approveRequest = function(description) {
        alert(`Petición "${description}" aprobada`);
       
    };

    window.deleteRequest = function(description) {
        alert(`Petición "${description}" eliminada`);
        
    };

  
    renderRequests(requests);
});