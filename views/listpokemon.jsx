var React = require('react');
var LayoutContainer = require('./layout.jsx');

class ListPokemon extends React.Component {
  render() {
    const ListAllPokemon =
    this.props.PokeObj.map(function(x){
      return (
        <p>{x.name}</p>
      )
    })
    return (
      <LayoutContainer>
      <div>
      <h1>Hello World!</h1>
      {ListAllPokemon}
    </div>
  </LayoutContainer>)
  }
}

module.exports = ListPokemon;
