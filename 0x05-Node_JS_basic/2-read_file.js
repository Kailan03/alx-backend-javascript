const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file content synchronously
        const data = fs.readFileSync(path, 'utf8');
        
        // Split the content into lines and filter out any empty lines
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        // The first line is the header, so we remove it
        const header = lines.shift();
        
        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        // Create a map to count students by field
        const studentGroups = {};

        lines.forEach(line => {
            const [firstname, lastname, age, field] = line.split(',');
            if (!studentGroups[field]) {
                studentGroups[field] = [];
            }
            studentGroups[field].push(firstname);
        });

        // Log the total number of students
        console.log(`Number of students: ${lines.length}`);

        // Log the number of students per field and the list of first names
        for (const field in studentGroups) {
            const studentList = studentGroups[field];
            console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }

    } catch (error) {
        // If any error occurs, log the error message
        console.error('Cannot load the database');
    }
}

// Export the function to be used in other modules
module.exports = countStudents;
