const express = require('express');
const Student = require('./Student');

const app = express();


app.use(express.json());

// Fetch all students
app.get('/students', (req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((error) => {
      console.error('Error retrieving students:', error);
      res.status(500).json({ error: 'Failed to retrieve students' });
    });
});

// Fetch a specific student by ID
app.get('/students/:id', (req, res) => {
  const studentId = req.params.id;
  Student.findById(studentId)
    .then((student) => {
      if (!student) {
        res.status(404).json({ error: 'Student not found' });
      } else {
        res.json(student);
      }
    })
    .catch((error) => {
      console.error('Error retrieving student:', error);
      res.status(500).json({ error: 'Failed to retrieve student' });
    });
});

// Create a new student
app.post('/students', (req, res) => {
  const { name, age, grade } = req.body;
  const student = new Student({ name, age, grade });
  student.save()
    .then((savedStudent) => {
      res.json(savedStudent);
    })
    .catch((error) => {
      console.error('Error creating student:', error);
      res.status(500).json({ error: 'Failed to create student' });
    });
});

// Update an existing student
app.put('/students/:id', (req, res) => {
  const studentId = req.params.id;
  const { name, age, grade } = req.body;
  Student.findByIdAndUpdate(studentId, { name, age, grade }, { new: true })
    .then((student) => {
      if (!student) {
        res.status(404).json({ error: 'Student not found' });
      } else {
        res.json(student);
      }
    })
    .catch((error) => {
      console.error('Error updating student:', error);
      res.status(500).json({ error: 'Failed to update student' });
    });
});

// Delete a student
app.delete('/students/:id', (req, res) => {
  const studentId = req.params.id;
  Student.findByIdAndDelete(studentId)
    .then((student) => {
      if (!student) {
        res.status(404).json({ error: 'Student not found' });
      } else {
        res.json({ message: 'Student deleted' });
      }
    })
    .catch((error) => {
      console.error('Error deleting student:', error);
      res.status(500).json({ error: 'Failed to delete student' });
    });
});

module.exports = app;
