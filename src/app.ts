import express from 'express';
import { validateCard } from './controllers/card.controller';
import { validateCardInput } from './middlewares/validateInput';

const app = express();

// Required to parse JSON request bodies
app.use(express.json());

// The Endpoint
// First we sanitize/validate the input format, then we run the Luhn check
app.post('/api/validate', validateCardInput, validateCard);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;