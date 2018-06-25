var React = require('react');
var LayoutContainer = require('./layout.jsx');

class ListPokemon extends React.Component {
  render() {
    return (<LayoutContainer>
      <div className="container">
        <h1>
          PoorMan Pokedex
        </h1>
        <form action="/pokemon/:id">
          <input type="number" name="id" />
          <input type="submit" />
        </form>
      </div>
    </LayoutContainer>)
  }
}

module.exports = ListPokemon;
