import React from "react";
import { Link } from "gatsby";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ThemeProvider } from 'styled-components';

import Layout from "../components/layout";
import SEO from "../components/seo";

import Box from "../components/UI/Box/Box";
import Button from "../components/UI/Button/Button";
import TextField from "../components/UI/TextField/TextField";
import su2cTheme from '../components/UI/themes/su2c';

const Example2 = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
  });

  return (
    <ThemeProvider theme={su2cTheme}>
      <Layout>
        <SEO title="Example 2" />
        <Box>
          <h1>Not a donation form!</h1>
          <Formik
            initialValues={{
              donationAmount: "",
              firstName: "",
              lastName: "",
              email: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched, values, handleChange, handleSubmit, setFieldValue }) => (
              <Form>
                <div>
                  <Button
                    type="button"
                    appearance={values.donationAmount === 20 ? "primary" : "defailt"}
                    onClick={() => setFieldValue("donationAmount", 20)}
                  >
                    £20
                  </Button>
                  <Button
                    type="button"
                    appearance={values.donationAmount === 50 ? "primary" : "defailt"}
                    onClick={() => setFieldValue("donationAmount", 50)}
                  >
                    £50
                  </Button>
                  <Button
                    type="button"
                    appearance={values.donationAmount === 100 ? "primary" : "defailt"}
                    onClick={() => setFieldValue("donationAmount", 100)}
                  >
                    £100
                  </Button>
                </div>
                <TextField
                  label="Donation amount"
                  extraLeft="£"
                  name="donationAmount"
                  onChange={handleChange}
                  value={values.donationAmount}
                  error={errors.donationAmount}
                  type="number"
                />
                <TextField
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  error={errors.firstName}
                />
                <TextField
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                  error={errors.lastName}
                />
                <Button type="submit" appearance="primary" onClick={handleSubmit}>
                  Donate Now!
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Layout>
    </ThemeProvider>
  );
};

export default Example2;
