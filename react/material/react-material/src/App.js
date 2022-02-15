import React, { Component } from 'react';
import NavBar from './NavBar'
import Posts from './Posts'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'


class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
        <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              My header
              <NavBar/>
           </TypoGraphy>
          </Toolbar>
        </AppBar>
      <Posts/>
      </div>
    );
  }
}
export default App;