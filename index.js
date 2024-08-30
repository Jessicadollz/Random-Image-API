import axios from 'axios';
import express from 'express';

// Creating express object
const app = express();

// Defining port number
const port = process.env.PORT || 8080;

app.use(express.json());

// Endpoint to get a random image
app.get('/api/image/random', async (req, res) => {
    try {
        const response = await axios.get("https://picsum.photos/200", { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Set content type based on image format
        res.send(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error fetching random image');
    }
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});