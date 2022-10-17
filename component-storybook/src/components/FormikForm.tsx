import * as React from 'react';
import { Formik, Field, Form, FormikHelpers, FormikErrors,FormikTouched } from 'formik';

interface FormikProps{
      /** Form values */
   values: Values;
   /** map of field names to specific error for that field */
   errors: FormikErrors<Values>;
   /** map of field names to **whether** the field has been touched */
   touched: FormikTouched<Values>;
   /** whether the form is currently submitting */
   isSubmitting: boolean;
   /** whether the form is currently validating (prior to submission) */
   isValidating: boolean;
   /** Top level status state, in case you need it */
   status?: any;
   /** Number of times user tried to submit the form */
   submitCount: number;
}

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

function validateEmail(value: string) {
    let error;
    if (!value) {
      error = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address format';
    }
    return error;
  }


export default function FormikForm() {
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}>
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="John" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        validate={validateEmail}
                        placeholder="john@acme.com"
                        type="email"
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}