var React = require('react');

class LayoutContainer extends React.Component {
  render() {
    const bodyStyle ={
      fontFamily: 'sans-serif',
      backgroundColor: 'white',
      color: 'black'
    }
    return (<html>
      <head>
        <title>Weakass Pokedex</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
      </head>
      <body style={bodyStyle}>
        {this.props.children}
      </body>
    </html>);
  }
}

module.exports = LayoutContainer;
