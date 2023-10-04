const express = require('express');
const path = require('path');
const recipesController = require('./recipesController.js')

const PORT = 3000;
const app = express();

app.use(express.static('client'));
app.use(express.json());

app.get('/recipes', recipesController.getRecipes, (req, res) => {
  console.log('Recipes retrieved')
  return res.status(200).json(res.locals.recipes);
});

app.post('/recipes', recipesController.addRecipes, (req, res) => {
  console.log('Added recipe')
  return res.status(200).json('Successfully added recipe')
});

app.use('*', (req, res) => {
  return res.sendStatus(404);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(defaultErr.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

module.export = app;
