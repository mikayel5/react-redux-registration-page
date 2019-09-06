export const REGISTRATION_CHANGE_EMAIL_TEXT ='REGISTRATION_CHANGE_EMAIL_TEXT';
export const REGISTRATION_CHANGE_PASSWORD_TEXT ='REGISTRATION_CHANGE_PASSWORD_TEXT';
export const REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT ='REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT';


export const setEmailText = email =>({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload:email
});

export const setPassword = password =>({
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload:password
});

export const setRepeatPassword = password =>({
    type: REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
    payload:password
});