// SurveyFormReview shows users their inputs so that they can review them before finally submitting the survey
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom'; //added to include the history so that i can redirect the user back to the dashboard after submitting the survey
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const fieldList = formFields.map( ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });


    return (
        <div>
            <h5>Please confirm your entries</h5>
            {fieldList}
            <button className= "yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
            </button>
            <button onClick={() => submitSurvey(formValues, history)}
            className="green btn-flat right white-text">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));