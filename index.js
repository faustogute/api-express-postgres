const { application } = require('express')
const express = require('express')
const app = express()

app.listen(3000, (error) => {
  error ? console.error(error) : console.log('Server running')
})
