import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import userRoutes from './routes/userRoutes.js';
import fs from 'fs';

const app = express();

app.use(express.json());

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Accounts API',
            version: '1.0.0',
            description: 'API for managing user accounts',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/controllers/*.js'], // Path to the files with OpenAPI annotations
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Write Swagger JSON to a file
fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health probe endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});