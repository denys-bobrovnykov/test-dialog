const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res)=> {
  res.send({response: "GET"})
});

app.post('/', (req, res) => {
  const { responseId } = req.body;
  console.log(req.body);
  res.status(200).send(req.body)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Listening')
})