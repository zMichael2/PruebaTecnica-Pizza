require('./database/bd')
const dotenv = require('dotenv')
const express = require('express');
const cors =  require('cors')

const pizzaRouter = require('./router/pizza')
const orderRouter = require('./router/order')

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(cors());



app.use('/api', orderRouter);
app.use('/api', pizzaRouter);



app.listen(PORT, ()=> console.log('Servidor iniciado correctamente'))