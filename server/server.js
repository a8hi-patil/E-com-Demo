const express = require('express');
const app = express();
const connectDB = require('./config/dbConnection')
var cors = require('cors')
app.use(cors())
connectDB();
const port =  5000;
app.use(express.json())
app.use('/api/product',require('./routes/productRoutes'))

// app.get('/contact/api', (req, res) => {
//     res.status(200).json({ message: 'Hello world' })
// })
  

app.listen(port, () => {
    console.log(`Server is started on port ${port}`)
})