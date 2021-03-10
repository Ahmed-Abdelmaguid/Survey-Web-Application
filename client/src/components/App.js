// if a file is exporting a class or a react component it will start with a cappital letter

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
// to give certian components the ablility to call action creators
import * as actions from '../actions';
//browersRouter is as the brains of how  react-router and tels it how to behave 'looks at the current url and then changes the set of components visible on the screen
//route is the react component that is used to set up a rule betweena certain route url and a set of components that will be visible on the screen   

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>



class App extends Component {
    // refactored app component to class component so that we can easily call an action creator to fetch the current user the instace our app loads
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path="/" component={Landing} />
                        {/* exact ensures that component only appears when the path is exaclty the same */}
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
                {/* browserRouter can only have one child */}
            </div>
        );
    }
}

export default connect(null, actions)(App);