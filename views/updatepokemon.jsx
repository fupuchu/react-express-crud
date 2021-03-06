var React = require('react');
var LayoutContainer = require('./layout.jsx');

class UpdatePokemon extends React.Component {
  render() {
    let formAction = '/updatepokemon/' + this.props.id + 'edit?_method=PUT'
    return (<LayoutContainer>
      <h1>
        Updating Pokemon (Change Name Only)
      </h1>
      <img src={this.props.img} />
      <form method="post" action={formAction}>
        <label>
          Name:
          <input type="text" name="name" value={this.props.name}/>
          <br />
          ID:
          <input type="text" name="id" value={this.props.id} readOnly/>
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
