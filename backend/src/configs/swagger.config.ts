import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', 
    info: {
      title: 'Cut Style - API Documentation', 
      version: '1.0.0', 
      description: 'API documetation for Cut Style barbery solution at no country simulation',
    },
    servers: [
      {
        url: 'http://localhost:8000',
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], 
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  console.log('Swagger docs available at /api-docs');
};
