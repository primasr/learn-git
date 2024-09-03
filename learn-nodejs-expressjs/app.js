const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/joke', async (req, res) => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Dark?type=single')
        const joke = response.data.joke
        res.json({joke})
    } catch (error) {
        res.status(500).json({error: 'Failed get data'})
    }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))