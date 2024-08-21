const fs = require('fs');
const path = require('path');

/**
 * Reads the database file and returns a promise that resolves to an object of arrays of first names per field.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<object>} - A promise that resolves to an object where keys are field names and values are arrays of first names.
 */
function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(new Error('Cannot load the database'));
            }

            const lines = data.split('\n').filter(line => line.trim() !== '');
            const header = lines.shift(); // Remove and discard the header

            if (lines.length === 0) {
                return resolve({}); // Return an empty object if no valid data
            }

            const studentGroups = {};

            lines.forEach(line => {
                const [firstname, , , field] = line.split(',');
                if (firstname && field) {
                    if (!studentGroups[field]) {
                        studentGroups[field] = [];
                    }
                    studentGroups[field].push(firstname);
                }
            });

            resolve(studentGroups);
        });
    });
}

module.exports = readDatabase;
