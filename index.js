const express = require('express');
const path = require('path');
const storeRoutes = require('./routes/storeRoutes');
const swaggerUi = require('swagger-ui-express');

swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', storeRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Faux store listening at http://localhost:${port}`);
});