// Define the Student interface
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to create and populate the table
function createTable() {
  // Get the table element
  const tableElement = document.createElement("table");

  // Iterate through the studentsList array
  studentsList.forEach((student) => {
    // Create a new table row
    const row = document.createElement("tr");

    // Create a cell for the student's first name
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    // Create a cell for the student's location
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    // Append the row to the table
    tableElement.appendChild(row);
  });

  // Append the table to the document body
  document.body.appendChild(tableElement);
}

// Call the createTable function
createTable();
