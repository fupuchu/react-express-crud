const express = require('express');
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const FILE = 'pokedex.json';
const path = require('path');
const app = express();
const reactEngine = require('express-react-views').createEngine();


app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

app.get('/listpokemon', (req,res) =>{
  jsonfile.readFile(FILE, (err, obj) =>{
    let n = {
      PokeObj : obj.pokemon
    }
    res.render('listpokemon', n);
  })
})

app.get('/pokemon/:id', (request, response) => {
  jsonfile.readFile(FILE, (err, obj) => {
    let inputId = request.params.id;
    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(inputId, 10);
    });

    if (pokemon === undefined) {
      response.status(404);
      response.send("not found");
    } else {
      response.render('findpokemon.jsx', pokemon)
    }
  });
});

app.get('/pokemon/new', (req, res) => {
  console.log("Create New Pokemon");
})

app.post('/pokemon', (req, res) => {
  console.log(req.body);
  jsonfile.readFile(FILE, (err, obj) => {
    obj["pokemon"].push(req.body);
    const newData = obj;
    jsonfile.writeFile(FILE, newData, (err) =>{
      console.error(err);
    })
  })
  res.sendFile(path.join(__dirname, '/public', 'success.html'));
})



app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
