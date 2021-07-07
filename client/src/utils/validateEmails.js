const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
    const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);
    //map works by taking the value out of the array then whatever we return will be added a new array then returns the new array   

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails} or there is a , at the end`;
    }

    return;
};