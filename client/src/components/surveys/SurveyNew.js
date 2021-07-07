// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyFrom from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
 /*  constructor(props) {
      super();

      this.state = { new: true };  //conventional way of initialzing component state
  } */

    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview 
            onCancel={() => this.setState({ showFormReview: false })}
            />;
        }

        return (
            <SurveyFrom 
            onSurveySubmit={() => this.setState({ showFormReview: true})} 
            />
        ); 
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm' //this has been added to clear the input added by the user in surveyForm once they cancel the survey. this has been done by not declaring destroyOnUnmount as false
})(SurveyNew);