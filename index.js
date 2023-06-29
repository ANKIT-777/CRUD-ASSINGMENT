const app = require('./src/app');
const connectToDB = require('./database/dbfile');


const port = 3000;

// Connect to the database
connectToDB()
  .then(() => {
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
