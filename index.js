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

app.get('/', (req, res) => {
  res.render('home', {msg: "Poorman Pokedex"})
})

app.get('/listpokemon', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    let n = {
      PokeObj: obj.pokemon
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

app.get('/updatepokemon/:id', (req, res) => {
  jsonfile.readFile('pokedex.json', (err, obj) => {
    let index = parseInt(req.params.id);
    let pokename = obj.pokemon[index - 1];
    res.render('updatepokemon', pokename);
  });
});

app.put('/updatepokemon/:id', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    let index = parseInt(req.params.id);
    let pokeIndex = obj.pokemon[index]
    let newValue = req.body

    obj["pokemon"][index - 1] = newValue

    const newThing = obj
    jsonfile.writeFile('pokedex.json', newThing, (err) => {
      console.error(err);
    })
  })
  res.render('home', {msg: "Updated" + req.params.id})
})

app.get('/addpokemon/', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    obj["pokemon"].push(req.body);
    const newData = obj;
    jsonfile.writeFile(FILE, newData, (err) => {
      console.error(err);
    })
  })
  res.render('addpokemon')
})

app.post('/addpokemon/post/yes', (req, res) => {
  jsonfile.readFile(FILE, (err, obj) => {
    obj["pokemon"].push(req.body);
    const newData = obj;
    jsonfile.writeFile(FILE, newData, (err) => {
      console.error(err);
    })
  })
  res.render('home', {msg: "Created new Pokemon"})
})

app.listen(8080, () => console.log('~~~ Tuning in to the waves of port 8080 ~~~'));
