// Fix for querySrv ECONNREFUSED on Windows (add at the absolute top)
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);     // Google DNS
// You can also try Cloudflare: dns.setServers(['1.1.1.1', '1.0.0.1']);

console.log('DNS servers set to:', dns.getServers());

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://nexon-global-trading-frontend1.onrender.com",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/products', require('./routes/products'));
app.use('/api/services', require('./routes/services'));
app.use('/api/enquiry', require("./routes/enquiry"));
app.use('/api/feedback',require("./routes/feedback"));

//test route
app.get('/', (req,res) => {
    res.json({ message: "Nexon Global Trading API is running" });
})

//connect to mongodb and start server

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(process.env.PORT, () => {
            console.log(`Server running on http://localhost:${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log('MongoDB Connection Failed', error.message);
    })
