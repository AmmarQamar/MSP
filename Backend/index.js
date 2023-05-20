// import express from "express" // for this package jason type="module"
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/MSP');


i
