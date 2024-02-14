import * as yup from 'yup';

export const SIGNUP_VALIDATION_SCHEMA = yup.object({
    firstName: yup.string().min(2).max(32).matches(/^[A-Z][a-z]*$/, 'only the first letter is capitalized').required(),
    lastName: yup.string().min(2).max(32).matches(/^[A-Z][a-z]*$/, 'only the first letter is capitalized').required(),
    login: yup.string().min(2).max(32).matches(/^[a-zA-Z]*$/, 'only english letters').required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required()

})
