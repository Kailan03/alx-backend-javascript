const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                const lines = data.split('\n').filter(line => line.trim() !== '');
                const header = lines.shift();

                if (lines.length === 0) {
                    reject(new Error('Cannot load the database'));
                }

                const studentGroups = {};
                let totalStudents = 0;

                lines.forEach(line => {
                    const [firstname, lastname, age, field] = line.split(',');
                    if (!studentGroups[field]) {
                        studentGroups[field] = [];
                    }
                    studentGroups[field].push(firstname);
                    totalStudents++;
                });

                console.log(`Number of students: ${totalStudents}`);

                for (const field in studentGroups) {
                    const studentList = studentGroups[field];
                    console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
                }

                resolve();
            }
        });
    });
}

module.exports = countStudents;
