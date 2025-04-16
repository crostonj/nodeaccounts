import swaggerJsdoc from 'swagger-jsdoc';
import fs from 'fs';

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

// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Write Swagger JSON to a file
fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));

export default swaggerSpec;