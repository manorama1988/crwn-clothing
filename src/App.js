import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';

import { auth , createUserProfileDocument} from './components/firebase/firebase-utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

unsubscribeFormAuth = null

  componentDidMount() {
    this.unscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          this.setState ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
        
      }
       this.setState({ currentUser: userAuth});
    })
  }

  componentWillUnmount() {
    this.unscribeFormAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.curentUser} /> 
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
       
      </div>
    );
  }
}



export default App;
