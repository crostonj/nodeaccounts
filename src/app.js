import express from 'express';
import userRoutes from './routes/userRoutes.js'; // Import the router directly

const app = express();

app.use(express.json());

app.use('/users', userRoutes); // Use the router directly

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});