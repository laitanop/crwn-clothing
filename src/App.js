import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            currentUser: null,
        };
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        console.log('currentUser', this.state.currentUser);
        return (
            <BrowserRouter>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/signIn"
                        component={SignInAndSignUpPage}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
