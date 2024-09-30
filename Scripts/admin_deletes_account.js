document.addEventListener('DOMContentLoaded', function() {
    const users = [
        { name: 'Juan Perez', antiguedad: '2 años' },
        { name: 'Ana Gomez', antiguedad: '1 año' },
        { name: 'Carlos Ruiz', antiguedad: '3 años' },
        { name: 'Maria Lopez', antiguedad: '4 años' },
        { name: 'Pedro Martinez', antiguedad: '5 años' },
        { name: 'Luisa Fernandez', antiguedad: '6 meses' },
        { name: 'Jorge Ramirez', antiguedad: '1 año y 6 meses' },
        { name: 'Sofia Torres', antiguedad: '2 años y 3 meses' },
        { name: 'Ricardo Diaz', antiguedad: '8 meses' },
        { name: 'Elena Morales', antiguedad: '2 años y 6 meses' }
    ];

    const userTableBody = document.querySelector('#userTable tbody');
    const filterSelect = document.getElementById('filter');

    function renderUsers(users) {
        userTableBody.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.antiguedad}</td>
                <td>
                    <button class="delete" onclick="deleteUser('${user.name}')">Eliminar</button>
                    <button class="ban" onclick="banUser('${user.name}')">Banear</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    function parseAntiguedad(antiguedad) {
        const parts = antiguedad.split(' ');
        let totalMonths = 0;
        for (let i = 0; i < parts.length; i += 2) {
            const value = parseInt(parts[i]);
            const unit = parts[i + 1];
            if (unit.includes('año')) {
                totalMonths += value * 12;
            } else if (unit.includes('mes')) {
                totalMonths += value;
            }
        }
        return totalMonths;
    }

    function compareAntiguedad(a, b) {
        const aMonths = parseAntiguedad(a.antiguedad);
        const bMonths = parseAntiguedad(b.antiguedad);
        return aMonths - bMonths; 
    }

    function sortUsers(criteria) {
        if (criteria === 'antiguedad') {
            users.sort((a, b) => compareAntiguedad(a, b));
        } else if (criteria === 'nombre') {
            users.sort((a, b) => a.name.localeCompare(b.name)); 
        }
        renderUsers(users);
    }

    filterSelect.addEventListener('change', function() {
        sortUsers(this.value);
    });

    window.deleteUser = function(name) {
        alert(`Usuario ${name} eliminado`);
        
    };

    window.banUser = function(name) {
        alert(`Usuario ${name} baneado`);
       
    };

   
    renderUsers(users);

});