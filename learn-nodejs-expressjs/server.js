const { createServer } = require('node:http')

const hostname = '127.0.0.1'
const port = 3000

var fs = require('fs')
var data = fs.readFileSync('temp.txt', 'utf-8')

const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    // res.end('Hello...')
    res.end(data)
})

server.listen(port, hostname, () => {
    // fs.readFile('temp.txt', 'utf-8', (err, data) => {
    //     console.log(data)
    // })
    fs.writeFile('temp.txt', 'Coba replace file di text.txt', err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
    })
    console.log(`Server running at http://${hostname}:${port}/`)
})
