//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';


const FIELDS = [
    { label: 'Survey Title', name: 'title', noValueError: 'You must provide a title' },
    { label: 'Subject Line', name: 'subject', noValueError: 'You must provide a subject' },
    { label: 'Email Body', name: 'body', noValueError: 'You must provide a body' },
    { label: 'Recipient List', name: 'email', noValueError: 'You must provide a email' }
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => { //iterate over FIELD for every object here run this function and create a new field and return it
            return <Field key={name} component={SurveyField} type='text' label={label} name={name} />
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    FIELDS.forEach( ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });

    errors.emails = validateEmails(values.emails || '');

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);