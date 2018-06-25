var React = require('react');

class LayoutContainer extends React.Component {
  render() {
    const bodyStyle ={
      fontFamily: 'sans-serif',
      backgroundColor: 'grey',
      color: 'white'
    }
    return (<html>
      <head>
        <title>Weakass Pokedex</title>
      </head>
      <body style={bodyStyle}>
        {this.props.children}
      </body>
    </html>);
  }
}

module.exports = LayoutContainer;
