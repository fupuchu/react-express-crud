var React = require('react');
var LayoutContainer = require('./layout.jsx');

class ListPokemon extends React.Component {
  render() {
    const ListAllPokemon =
    this.props.PokeObj.map(function(x){
      let actualID = x.id
      let anchor = '/updatepokemon/' + actualID
      return (
        <p>
          <a href={anchor}>
            {x.name}
          </a>
        </p>
      )
    })
    return (
      <LayoutContainer>
      <div>
      <h1>Click on the pokemon to edit!</h1>
      {ListAllPokemon}
    </div>
  </LayoutContainer>)
  }
}

module.exports = ListPokemon;
