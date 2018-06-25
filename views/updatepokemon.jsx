var React = require('react');
var LayoutContainer = require('./layout.jsx');

class UpdatePokemon extends React.Component {
  render() {
    return (<LayoutContainer>
      <h1>
        Updating Pokemon {this.props.id}
      </h1>
      <form action="/editpokemon">
        <label>
          Name:
          <input type="text" name="name" value={this.props.name}/>
          <br />
          ID:
          <input type="text" name="id" value={this.props.id}/>
          <br />
          IMG:
          <input type="text" name="img" value={this.props.img}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </LayoutContainer>)
  }
}

module.exports = UpdatePokemon;
