var React = require('react');
var LayoutContainer = require('./layout.jsx');

class ListPokemon extends React.Component {
  render() {
    return (<LayoutContainer>
      <div>
        <p>
          Name: {this.props.name}
        </p>
        <p>
          Num: {this.props.num}
        </p>
        <img src={this.props.img} />
      </div>
    </LayoutContainer>)
  }
}

module.exports = ListPokemon;
