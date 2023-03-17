import express from 'express';
const app = express();
import { appendFileSync } from 'fs';

app.use(express.static('./'));
app.use(express.json());

app.post('/stats', (req, res) => {
    appendFileSync('statistics.txt', JSON.stringify(req.body) + '\n');
});

app.listen(3000, () => {
    console.log('OK');
})