var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const app = express()

app.use(express.static('src/client'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', {
        root: __dirname + '/..'
    })
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.get('/meaning', function (req, res) {
    const formdata = new FormData();
    formdata.append("key", "bcae8578891ca25eff5ebf4a0ad003a1");
    formdata.append("url", "https://en.wikipedia.org/wiki/Webpack");
    formdata.append("lang", "en"); // 2-letter code, like en es fr ...
    formdata.append("tt", "a"); // all topics

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
   
    fetch("https://api.meaningcloud.com/topics-2.0", requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log("Topics Extraction API response:", data);
      // Use the response data to analyze the topics
      res.send(data)
    })
    .catch(error => console.log("Error:", error));
})