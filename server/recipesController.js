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

recipesController.deleteRecipe = async (req, res, next) => {
  console.log('Entered recipesController.deleteRecipe');
  const recipeName = req.params.id;
  console.log(recipeName)
  const deletedCount = await models.Recipes.deleteOne({ eyedee: recipeName });
  console.log(deletedCount)
  if (deletedCount === 0) return next({
    log: 'Express error in recipesController.deleteRecipe',
    message: { err: 'Files not found'}
  })
  res.locals.numDeleted = deletedCount;
  return next();
}

module.exports = recipesController;