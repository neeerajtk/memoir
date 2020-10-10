import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import Write from './components/Write';
import SignIn from './components/SignIn';
import {auth} from './firebase/farebase.utils'; 
 
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

  return (

      <BrowserRouter>    
      <div>
      <Navbar currentUser={this.state.currentUser}/>
       <Switch>
          <Route exact path='/' component={Write} />
          <Route 
            exact 
            path='/signin' 
            render={()=>this.state.currentUser ? (
            <Redirect to='/' />
            ):(
            <SignIn/>
            )
            }
          />
        </Switch>
         </div>
        </BrowserRouter>
   
  );
}}

export default App;
