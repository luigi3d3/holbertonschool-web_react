// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student objects
const student1: Student = {
  firstName: "luigino",
  lastName: "loayza",
  age: 30,
  location: "lima"
};

const student2: Student = {
  firstName: "clara",
  lastName: "carvalho",
  age: 29,
  location: "joao pessoa"
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Render table and append rows
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");
  
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
