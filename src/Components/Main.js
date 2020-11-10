import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import { connect } from 'react-redux';
import mapStateToProps from '../Containers/MainContainer';
import { bindActionCreators } from 'redux';

import Navbar from './Navbar';

class Main extends React.Component {

  render(){
    return (
      <div className={`main`}>
        <Navbar/>
        <div className="pageContents">
          <div className={`mainDiv ${this.props.RouterReducer.prepareRouteChange === true ? 'routeChange' : ''}`}>
            {this.props.RouterReducer.route === "comp1" ? <h1>Comp - 1</h1>
              :
              this.props.RouterReducer.route === "comp2" ? <h1>Comp - 2</h1>
              :
              <h1>(Error 404) <br/> Page not found</h1>
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);