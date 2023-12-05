const swaggerDefinition = {
  openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
  info: {
    title: 'TodoApp API', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'A sample Todo API', // Description (optional)
  },
  servers: [
    {
      url: 'http://localhost:3000', // URL (optional)
      description: 'Local server', // Name (optional)
    },
  ],
  apis: ['./routes/*.js', './app.js'], 
  // ... other global-level specification like security definitions
};

module.exports = swaggerDefinition;

