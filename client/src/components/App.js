// if a file is exporting a class or a react component it will start with a cappital letter

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
//browersRouter is as the brains of how  react-router and tels it how to behave 'looks at the current url and then changes the set of components visible on the screen
//route is the react component that is used to set up a rule betweena certain route url and a set of components that will be visible on the screen   

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


const App = () => {
    // create a fuctional component that returns jxs
    return (
        <div>
            <BrowserRouter>
                <div>
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
};

export default App;