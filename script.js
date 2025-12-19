let students = [];

function addStudent() {
    let name = document.getElementById("studentName").value.trim();
    let marks = document.getElementById("studentMarks").value;

    if (name === "" || marks === "") {
        alert("Please enter both name and marks");
        return;
    }

    marks = Number(marks);

    if (marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100");
        return;
    }

    let grade = calculateGrade(marks);

    students.push({
        name: name,
        marks: marks,
        grade: grade
    });

    displayStudents();

    document.getElementById("studentName").value = "";
    document.getElementById("studentMarks").value = "";
}

function calculateGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 60) return "C";
    if (marks >= 40) return "D";
    return "F";
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach(student => {
        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.marks}</td>
                <td>${student.grade}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}
