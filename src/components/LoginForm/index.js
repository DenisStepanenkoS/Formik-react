import { Formik , Form, ErrorMessage, Field} from "formik";
import styles from './css/styles.module.css';
import { Link } from "react-router-dom";

function LoginForm(){
    const initialValues = {
        login: '',
        password: '',
    }

    const handleSubmit = (values, formikBag) => {
        formikBag.resetForm();
    }

    return(
        <Formik 
            initialValues={initialValues}
            onSubmit={handleSubmit}
            >
            <Form className={styles.loginForm}>
                <header className={styles.loginFormHeader}>
                    <img className={styles.loginFormLogo} alt="Logo" />
                    <Link className={styles.linkSignUpForm} to="/SignUp">Sign Up</Link>
                </header>
                <main className={styles.loginFormMain}>
                    <h2 className={styles.LoginHeader}>LOGIN TO YOUR ACCOUNT</h2>
                    <div className={styles.inputFields}>
                        <Field placeholder='login'className={styles.inputField} name='login'/>
                        <Field placeholder='*********' type='password'className={styles.inputField} name='password'/>
                    </div>
                    <button className={styles.submitButton} type="submit">LOGIN</button>
                </main>
            </Form>
        </Formik>
    );
}

export default LoginForm;