const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const URI = process.env.MONGO_URI;

mongoose
  .connect(URI, {
    dbName: 'recipes',
  })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log(error));

const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  eyedee: Number,
  recipeName: {type: String, required: true},
  ingredientList: {
    one: String,
    two: String,
    three: String,
    four: String,
    five: String,
    six: String,
    seven: String,
    eight: String,
    nine: String,
    ten: String,
  },
  glassware: String,
  shake: String,
  strain: String,
  ice: String,
  garnish: String
});

const Recipes = mongoose.model('recipes', recipesSchema);

module.exports = { Recipes };