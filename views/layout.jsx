var React = require('react');
import NavBar from 'react-bootstrap/lib/NavBar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropDown';
import MenuItem from 'react-bootstrap/lib/Menuitem';

class LayoutContainer extends React.Component {
  render() {
    const bodyStyle = {
      fontFamily: 'sans-serif',
      backgroundColor: 'white',
      color: 'black'
    }
    return (<html>
      <head>
        <title>Weakass Pokedex</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
      </head>
      <NavBar>
        <NavBar.Header>
          <NavBar.Brand>
            <a href="#home">Weakass Pokedex</a>
          </NavBar.Brand>
        </NavBar.Header>
        <Nav>
          <NavItem href="#">
            Link
          </NavItem>
          <NavItem href="#">
            Link
          </NavItem>
        </Nav>
      </NavBar>
      <body style={bodyStyle}>
        {this.props.children}
      </body>
    </html>);
  }
}

module.exports = LayoutContainer;
