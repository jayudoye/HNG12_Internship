const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

//Email, Current Datetime and Github URL
const email = process.env.EMAIL
const current_datetime = new Date().toISOString()
const github_url = process.env.GITHUB_URL

//Enabling CORS for all Origin
app.use(cors())

app.get('/', (req, res) => {

    const response = {
        email,
        current_datetime,
        github_url
    }
  res.json(response)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
