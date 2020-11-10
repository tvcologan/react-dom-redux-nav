import React from 'react';
import { connect } from 'react-redux';
import { appAction } from '../Actions/MainActions';
import mapStateToProps from '../Containers/MainContainer';
import { bindActionCreators } from 'redux';

class ExampleComponent extends React.Component {


  constructor(){
    super();

    this.state = {
      textIndex: 0
    };

    this.changeText = this.changeText.bind(this);

    this.texts = [
      "Hello World!",
      "A bad workman blames his tools",
      "Better safe than sorry",
      "Coffee and love taste best when hot.",
      "A chain is only as strong as its weakest link.",
      "Do not bite the hand that feeds you",
      "Cheese, wine, and friends must be old to be good.",
      "Not all those who wander are lost",
      "Procrastination is the thief of time",
      "Nothing is certain but death and taxes",
    ];
  }
  
  componentDidMount(){
    this.changeText(0);
    setInterval(this.changeText, 5000);
  }

  changeText(index){

    var newIndex = -1;
    debugger;

    if (index !== undefined){
      newIndex = index;
    }else{
      newIndex = this.state.textIndex === this.texts.length-1 ? 0 : this.state.textIndex+1;
    }

    this.props.appAction(this.texts[newIndex]);
    this.setState({
      textIndex: newIndex
    });
    
  }

  render() {

      return (
       <div onClick={() => this.changeText()}>
         <h1>{this.props.MainReducer.text}</h1>
       </div>
      );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ appAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
