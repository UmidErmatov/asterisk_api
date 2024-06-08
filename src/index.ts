import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import cdrRoutes from './routes/cdr.route';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

dotenv.config();

const app = express();

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
app.use(express.json())

async function checkDbConnection() {
    try {
        await prisma.$connect(); // Attempt a ping to the database
        console.log('Successfully connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

// Call the checkDbConnection function (e.g., during server startup)
checkDbConnection();

app.use('/cdr', cdrRoutes)

app.get("/ping", (req, res) => {
    res.json({ message: "pong" }).status(200);
});


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});