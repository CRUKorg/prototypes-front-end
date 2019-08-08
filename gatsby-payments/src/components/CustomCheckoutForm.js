import React from "react";
import { CardElement, injectStripe } from "react-stripe-elements-universal";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import Button from "../components/UI/Button/Button";
import Checkbox from "../components/UI/Checkbox/Checkbox";
import Radio from "../components/UI/Radio/Radio";
import TextField from "../components/UI/TextField/TextField";
import su2cTheme from "../components/UI/themes/su2c";
import Label from "../components/UI/Label";

const SignupSchema = Yup.object().shape({
  donationAmount: Yup.string().required("Required"),
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

const StyledCardElement = styled(CardElement)`
  background-color: #fff;
  background-image: none;
  border-radius: 3px;
  border: solid 2px #c8c9c7;
  color: #333;
  display: block;
  font-size: 1rem;
  padding: 6px 8px;
  width: 100%;
`;

const StyledFieldset = styled.fieldset`
  border: 0;
  margin: 20px;
  padding: 0 0 20px;
  display: block;
  border-bottom: 1px solid grey;
`;

const StyledLegend = styled.legend`
  display: block;
  font-size: 22px;
  font-family: MuseoSans-500, Calibri, Arial, sans-serif;
`;

class CustomCheckoutForm extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (typeof window !== `undefined` && typeof window.Stripe !== `undefined`) {
      this.stripe = window.Stripe(`my_key`, {
        betas: ["payment_intent_beta_3"]
      });
    }
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { paymentIntent, error } = await this.stripe.handleCardPayment(
      `a client_secret`,
      this.StripeCardElement
    );
    // .then(...and so on)
  }
  render() {
    return (
      <Formik
        initialValues={{
          donationAmount: "",
          firstName: "",
          giftAid: "",
          paymentType: "",
          lastName: "",
          email: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values

          this.props.stripe.createToken({ name: values.email }).then(res => {
            fetch("https://ornovia.com/payment", {
              credentials: "same-origin",
              mode: "cors",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify({
                token: res.token.id,
                amount: values.donationAmount * 100
              })
            })
              .then(response => {
                if (response.ok) return response.json();
                throw new Error("Something went wrong ...");
              })
              .then(data => alert(JSON.stringify(data)));
          });
          console.log(values);
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleSubmit,
          setFieldValue
        }) => (
          <Form>
            <StyledFieldset>
              <StyledLegend>Donation amount</StyledLegend>
              <div>
                <Button
                  type="button"
                  appearance={
                    values.donationAmount === 20 ? "primary" : "defailt"
                  }
                  onClick={() => setFieldValue("donationAmount", 20)}
                >
                  £20
                </Button>
                <Button
                  type="button"
                  appearance={
                    values.donationAmount === 50 ? "primary" : "defailt"
                  }
                  onClick={() => setFieldValue("donationAmount", 50)}
                >
                  £50
                </Button>
                <Button
                  type="button"
                  appearance={
                    values.donationAmount === 100 ? "primary" : "defailt"
                  }
                  onClick={() => setFieldValue("donationAmount", 100)}
                >
                  £100
                </Button>
              </div>
              <TextField
                label="Other amount"
                extraLeft="£"
                name="donationAmount"
                onChange={handleChange}
                value={values.donationAmount}
                error={errors.donationAmount}
                type="number"
              />
            </StyledFieldset>
            <StyledFieldset>
              <StyledLegend>Gift Aid</StyledLegend>
              <p>
                With Gift Aid, your donation of £20.00 would be worth £25.00 at
                no extra cost to you.
              </p>
              <Checkbox
                name="giftAid"
                value={values.giftAid}
                onChange={handleChange}
              >
                Yes I would like Cancer Research UK to claim Gift Aid on my
                donation
              </Checkbox>
              <p>
                I want to Gift Aid my donation and any donations I make in the future or have made in the past 4 years, to Cancer Research UK. I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all of my donations in that tax year it is my responsibility to pay any difference. Cancer Research UK will claim 25p on every £1 donated.
              </p>
            </StyledFieldset>
            <StyledFieldset>
              <StyledLegend>Your details</StyledLegend>
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
              <TextField
                label="Email address"
                name="email"
                onChange={handleChange}
                value={values.email}
                error={errors.email}
              />
              <TextField
                label="Phone number"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                error={errors.phone}
              />
            </StyledFieldset>
            <StyledFieldset>
              <StyledLegend>How would you like to donate?</StyledLegend>
              <div>
                <Radio
                  name="paymentType <img src="//d77hrzbdrgc46.cloudfront.net//assets/T8PCRa4zh5i-OmXj1wYoow==/themes/cruk/campaign/images/credit-debit-card.png" alt="Pay with Credit/Debit cards">"
                  onChange={() => setFieldValue("paymentType", "card")}
                  value="card"
                  checked={values.paymentType === "card"}
                >
                  Credit/Debit card <img src="//d77hrzbdrgc46.cloudfront.net//assets/T8PCRa4zh5i-OmXj1wYoow==/themes/cruk/campaign/images/credit-debit-card.png" alt="Pay with Credit/Debit cards" />
                </Radio>
                <Radio
                  name="paymentType"
                  onChange={() => setFieldValue("paymentType", "payPal")}
                  value="PayPal"
                  checked={values.paymentType === "payPal"}
                />
              </div>
              {values.paymentType === "payPal" && (
                <Button
                  type="button"
                  appearance="primary"
                  onClick={() => alert("Sorry not yet")}
                >
                  Paypal
                </Button>
              )}
              {values.paymentType === "card" && (
                <>
                  <Label>
                    Card details
                    <StyledCardElement
                      ref={thisCardElement => {
                        this.StripeCardElement = thisCardElement;
                      }}
                    />
                  </Label>
                  <Button
                    type="submit"
                    appearance="primary"
                    onClick={handleSubmit}
                  >
                    Donate Now!
                  </Button>
                </>
              )}
            </StyledFieldset>
          </Form>
        )}
      </Formik>
    );
  }
}

export default injectStripe(CustomCheckoutForm);
//export default CustomCheckoutForm;
