const fs = require('fs')
const axios = require('axios')
const mongoose = require('mongoose')
const dataRetrievalIntegration = require('./integration/get-repos-data.js')
const token = require('./token.json').token
const searchTerm = 'react'
const language = 'javascript'
const endpointUrl = 'https://api.github.com/search/repositories'
const saveRepositoryController = require('./controllers/save-repository')
const db = mongoose.connection

mongoose.connect("mongodb://localhost/test")
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

});
dataRetrievalIntegration({
    language,
    q: searchTerm,
    access_token: token,
    url: endpointUrl,
    callback: saveRepositoryController
})