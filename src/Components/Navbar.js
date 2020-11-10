import React from 'react';

import { connect } from 'react-redux';
import mapStateToProps from '../Containers/RouterContainer';
import { bindActionCreators } from 'redux';
import {setRoute, prepareRouteChange} from '../Actions/RouterActions';

class Navbar extends React.Component {

  constructor(...args){
    super(...args);

    this.changeRoute = this.changeRoute.bind(this);
  }

  changeRoute(route){
    this.props.prepareRouteChange();
    setTimeout(()=>{
      this.props.setRoute(route)
    },500);
  }

  render(){
    return (
        <div className="navDiv">
          <div>
            <div className={`navItem pointer ${this.props.RouterReducer.route === "comp1" ? 'active' : ''}`} onClick={() => this.changeRoute("comp1")}>
              <p>Comp 1</p>
            </div>
            <div className={`navItem pointer ${this.props.RouterReducer.route === "comp2" ? 'active' : ''}`} onClick={() => this.changeRoute("comp2")}>
              <p>Comp 2</p>
            </div>
            <div className={`navItem pointer ${this.props.RouterReducer.route === "comp3" ? 'active' : ''}`} onClick={() => this.changeRoute("error")}>
              <p>Error 404</p>
            </div>
          </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setRoute, prepareRouteChange }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);