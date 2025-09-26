import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Test route without any authentication
app.get('/', (req, res) => {
    console.log('Root route called');
    res.send('Server is Live!');
});

// Test public API route
app.get('/api/test', (req, res) => {
    console.log('Test API called');
    res.json({ message: 'Public API works!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Test server running on port', PORT);
});