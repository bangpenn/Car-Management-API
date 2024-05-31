// src/server.ts
import express from 'express';
import orderRoutes from './routes/orderRoutes';
import carRoutes from './routes/carRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/api', carRoutes);
app.use('/api', orderRoutes);
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
