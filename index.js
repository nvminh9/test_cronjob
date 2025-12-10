import express from 'express';

const app = express();
const PORT = process.env.PORT || 3800;

app.get('/', (req, res) => {
    res.send('Hello from test_cronjob');
});

// Checking
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});