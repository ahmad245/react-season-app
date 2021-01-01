import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class  App extends Component {
  
    state={
      lat:null,
      errorMessage:''
    }
  
  
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=>this.setState({lat:position.coords.latitude}),
      (error)=>this.setState({errorMessage:error.message})
    );
  }
  render() {
    if(!this.state.lat && this.state.errorMessage){
    return <div>{this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
      return   <SeasonDisplay lat={this.state.lat} />
    }
    else{
      return <Spinner > Please accept location request </Spinner>
    }
    
  }

  
}

export default App;
