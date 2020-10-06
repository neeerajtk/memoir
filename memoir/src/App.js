import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Write from './components/Write';
import SignIn from './components/SignIn';
import {auth} from './firebase/farebase.utils'; 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user);
      
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render(){

  return (
    <div>
      {/* <Navbar/>
      <Write/> */}
      <SignIn/>
    </div>
  );
}}

export default App;
