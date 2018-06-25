var React = require('react');
var LayoutContainer = require('./layout.jsx');

class AddPokemon extends React.Component {
  render() {
    let formAction = '/addpokemon/post/yes'
    return (<LayoutContainer>
      <h1>
        Add New Pokemon FOOL!
      </h1>
      <form method="post" action={formAction}>
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

module.exports = AddPokemon;
