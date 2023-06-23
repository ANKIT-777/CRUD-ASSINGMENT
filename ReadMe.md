
# Node.js RESTful API with MongoDB

This is a simple RESTful API built with Node.js, MongoDB, and Express. It allows you to perform CRUD (Create, Read, Update, Delete) operations on student data.

## Requirements

To run this project, you need to have the following software installed on your machine:

- Node.js
- MongoDB

## Getting Started

1. Clone the repository:

git clone https://github.com/ANKIT-777/CRUD-ASSINGMENT.git


2. Navigate to the project directory:

cd node-rest-api-mongodb

3. Install the dependencies:

npm install

4. Set up the database:

   - Install MongoDB on your machine and make sure it's running.
   - Create a new database named `mydatabase` in MongoDB.

5. Configure the environment variables:

   - Create a file named `.env` in the root directory.
   - Add the following line to the `.env` file:

     ```
     DB_URL=mongodb+srv://students:ankit111@cluster0.2dhvrzw.mongodb.net/?retryWrites=true&w=majority
     ```

     Replace `<mongodb+srv://students:ankit111@cluster0.2dhvrzw.mongodb.net/?retryWrites=true&w=majority>` with the connection URL for your MongoDB database.

6. Start the server:

npm start

The server will start running at `http://localhost:3000`.

## API Endpoints

- GET /students: Fetch all students from the database.
- GET /students/:id: Fetch a specific student by their ID.
- POST /students: Create a new student.
- PUT /students/:id: Update an existing student.
- DELETE /students/:id: Delete a student.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
Feel free to modify the content according to your project's specific details and requirements.




