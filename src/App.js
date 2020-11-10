import React from 'react';
import './App.scss';

import { connect } from 'react-redux';
import mapStateToProps from './Containers/MainContainer';
import { bindActionCreators } from 'redux';

import Main from './Components/Main';

class App extends React.Component {
  render(){
    return <Main/>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);