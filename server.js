const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 解析 application/json
app.use(bodyParser.json())
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

const textPlainJson = bodyParser.json({ type: 'text/plain' });

app.post('/testBeacon', textPlainJson, (req, res) => {
	console.log('query', req.query);
	console.log('body', req.body);
	res.send('success');
});

app.listen(3000)
