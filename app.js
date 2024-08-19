
const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middleware
app.use(morgan("combined"));
app.use(helmet())
app.use(compression())

app.get(`/`,(req, res, next)=>{
    return res.status(200)
            .json({
                message: `Hello Express`,
                metadata: "Welcome Express".repeat(1000000)
            });
})

module.exports = app;