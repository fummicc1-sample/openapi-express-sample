import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
const swaggerDocument = YAML.load(`${__dirname}/../src/api/api-doc.yaml`)

app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocument)
)

app.listen(3000);