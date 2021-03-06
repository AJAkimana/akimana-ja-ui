import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { appSecurity } from './config/security';

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/build'));

appSecurity(app);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build', 'index.html'));
});

app.listen(port, () => console.log(`listening on port ${port}`));
