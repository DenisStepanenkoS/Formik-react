import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGNUP_VALIDATION_SCHEMA } from '../../Utils/validationScheme'; 
import styles from './css/styles.module.css';
function SignUpForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  console.log(SIGNUP_VALIDATION_SCHEMA);

  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SIGNUP_VALIDATION_SCHEMA}
    >
      <Form className={styles.signUpForm}>
        <header className={styles.signUpFormHeader}>
          <img className={styles.signUpFormLogo} alt="Logo" />
          <Link className={styles.linkLoginForm} to="/Login">Login</Link>
        </header>
        <main className={styles.signUpFormMain}>
          <div className={styles.inputHead}>
            <h2 className={styles.createAccountHeader}>Create an Account</h2>
            <p className={styles.inputHeadText}>We always keep your name and email address private</p>
          </div>

          <div className={styles.inputFields}>
            <label>
                <Field placeholder='first name'className={styles.inputField} name="firstName" />
                <ErrorMessage component='span' className={styles.error} name="firstName" />
            </label>
          
            <label>
                <Field placeholder='Last name'className={styles.inputField} name="lastName" />
                <ErrorMessage component='span' className={styles.error} name="lastName" />
            </label>
          
            <label>
                <Field placeholder='login' className={styles.inputField} name="login" />
                <ErrorMessage component='span' className={styles.error} name="login" />
            </label>
          
            <label>
                <Field placeholder='email'className={styles.inputField} type="email" name="email" />
                <ErrorMessage component='span' className={styles.error} name="email" />
            </label>
          
            <label>
                <Field placeholder='********'className={styles.inputField} type="password" name="password" />
                <ErrorMessage component='span' className={styles.error} name="password" />
            </label>
          
            <label>
                <Field placeholder='********' className={styles.inputField} type="password" name="confirmPassword" />
                <ErrorMessage component='span' className={styles.error} name="confirmPassword" />
            </label>
          </div>

          <button className={styles.submitButton}type='submit'>Create account</button>
        </main>
      </Form>
    </Formik>
  );
}

export default SignUpForm;
