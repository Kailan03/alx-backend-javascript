const readDatabase = require('../utils'); // Import the readDatabase function

class StudentsController {
    /**
     * Handles the request to get all students.
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     */
    static async getAllStudents(req, res) {
        const databasePath = process.argv[2]; // Get the database path from command-line arguments

        try {
            if (databasePath) {
                const studentGroups = await readDatabase(databasePath);

                // Sort fields alphabetically (case insensitive)
                const sortedFields = Object.keys(studentGroups).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

                res.status(200).write('This is the list of our students\n');

                // Write the number of students and list for each field
                sortedFields.forEach(field => {
                    const studentList = studentGroups[field];
                    res.write(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`);
                });

                res.end();
            } else {
                res.status(500).send('Cannot load the database');
            }
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
