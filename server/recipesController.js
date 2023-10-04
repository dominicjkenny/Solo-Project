const fs = require('fs');
const path = require('path');
const models = require(path.resolve(__dirname, 'models'));

const recipesController = {};

recipesController.getRecipes = async (req, res, next) => {
  console.log('Entered recipesController.getRecipes')
  const recipes = await models.Recipes.find();
  if (!recipes) return next({
    log: 'Express error in recipesController.getRecipes',
    message: { err: 'Files not found'}
  });
  res.locals.recipes = recipes;
  return next();
}

recipesController.addRecipes = async (req, res, next) => {
  console.log('Entered recipesController.addRecipes');
  const drink = req.body;
  await models.Recipes.create(drink);
  return next();
}

module.exports = recipesController;