const express = require('express');
const connectDB = require('./dbutil/db');  // Adjust the path as needed

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware and routes
app.use(express.json());
app.use('/api/', require('./router/routers'));  // Adjust the path as needed

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
