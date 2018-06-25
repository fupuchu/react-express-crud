var React = require('react');
var LayoutContainer = require('./layout.jsx');

class Home extends React.Component {
  render() {
    return (<LayoutContainer>
      <div className="container">
        <h1>
          {this.props.msg}
        </h1>
        <form method="post" action="/findpokemon">
          <input type="number" name="id" />
          <input type="submit" />
        </form>
      </div>
    </LayoutContainer>)
  }
}

module.exports = Home;
