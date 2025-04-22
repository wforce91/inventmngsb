const form = document.getElementById('employeeForm');
const tableBody = document.getElementById('employeeTableBody');
const submitButton = document.getElementById('submitButton');
const cancelButton = document.getElementById('cancelButton');
const employeeIdField = document.getElementById('employeeId');
const API_BASE = '/api/employees';

async function loadEmployees() {
    const response = await fetch(API_BASE);
    const employees = await response.json();
    renderTable(employees);
}

function renderTable(employees) {
    tableBody.innerHTML = '';
    employees.forEach(emp => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${emp.name} ${emp.lastName}</td>
            <td>${emp.email}</td>
            <td>${emp.role}</td>
            <td>${emp.phoneNumber}</td>
            <td>${emp.address}</td>
            <td>${emp.ssn}</td>
            <td class="text-end">
                <button class="btn btn-warning btn-sm me-2" onclick="editEmployee(${emp.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${emp.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = employeeIdField.value;
    let tempRole = document.getElementById('role').value;
    console.log(tempRole);
    let tempPhone = document.getElementById('phone').value;
    console.log(tempPhone);

    const employee = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        role: document.getElementById('role').value,
        phoneNumber: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        ssn: document.getElementById('ssn').value
    };

    try {
        if (id) {
            await fetch(`${API_BASE}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(employee)
            });
        } else {
            await fetch(API_BASE, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(employee)
            });
        }

        form.reset();
        employeeIdField.value = '';
        submitButton.textContent = 'Add';
        cancelButton.classList.add('d-none');
        loadEmployees();
    } catch (err) {
        console.error('Error saving employee:', err);
    }
});

async function editEmployee(id) {
    const response = await fetch(`${API_BASE}/${id}`);
    const emp = await response.json();

    employeeIdField.value = emp.id;
    document.getElementById('name').value = emp.name;
    document.getElementById('lastName').value = emp.lastName;
    document.getElementById('email').value = emp.email;
    document.getElementById('role').value = emp.role;
    document.getElementById('phone').value = emp.phoneNumber;
    document.getElementById('address').value = emp.address;
    document.getElementById('ssn').value = emp.ssn;

    submitButton.textContent = 'Update';
    cancelButton.classList.remove('d-none');
}

cancelButton.addEventListener('click', () => {
    form.reset();
    employeeIdField.value = '';
    submitButton.textContent = 'Add';
    cancelButton.classList.add('d-none');
});

async function deleteEmployee(id) {
    await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
    loadEmployees();
}

loadEmployees();
