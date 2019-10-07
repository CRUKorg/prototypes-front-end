import React from "react";
import PaymentFields from "payment-fields";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import Button from "../components/UI/Button/Button";
import Checkbox from "../components/UI/Checkbox/Checkbox";
import Radio from "../components/UI/Radio/Radio";
import TextField from "../components/UI/TextField/TextField";
import su2cTheme from "../components/UI/themes/su2c";
import Label from "../components/UI/Label";

const StyledPaymentFieldsField = styled(PaymentFields.Field)`
  background-color: #fff;
  border-radius: 3px;
  border: solid 2px #c8c9c7;
  height: 2.2em;
  padding: 6px 8px;
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

export default class PaymentFieldsDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    [
      "getToken",
      "onError",
      "onTypeChange",
      "onFieldsReady",
      "onCardTypeChange",
      "onValidityChange",
      "setAuthorization",
      "onNumberValid"
    ].forEach(prop => {
      this[prop] = this[prop].bind(this);
    });
    this.stripeApiKey = "pk_test_5r9fnuslIznmQtNHSkRV3HQj00w1467fNY";
    this.state = {
      type: "Stripe",
      valid: false,
      log: [],
      isEnabled: false,
      authorization: this.stripeApiKey
    };
  }

  onNumberValid(ev) {
    this.setState({ numberIsValid: ev.isValid });
  }

  async onTypeChange(e) {
    const type = e.target.value;
    if (type === "Stripe") {
      this.setState({
        tokenize: null,
        valid: false,
        ready: false,
        type,
        authorization: this.stripeApiKey
      });
    }
    if (type === "Braintree") {
      this.setState({
        tokenize: null,
        valid: false,
        ready: false,
        type,
        authorization: ""
      });
      const response = await fetch(
        "https://k5i9d7lehh.execute-api.eu-west-2.amazonaws.com/dev/client_token"
      );
      const { clientToken } = await response.json();
      this.setState({ authorization: clientToken });
    }
  }

  onError(error) {
    console.log({error});
  }

  async getToken() {
    return this.state.tokenize().then(
      res => {
        return res.token;
      },
    ).catch(
      error => console.log({ error }),
    );
  }

  onCardTypeChange(card) {
    this.setState({ card: card.brand });
  }

  onFieldsReady({ tokenize }) {
    this.setState({ ready: true, tokenize });
  }

  onValidityChange(e) {
    this.setState({ valid: e.isValid });
  }

  setAuthorization() {
    this.setState({ authorization: this.inputRef.value });
  }

  renderFields(amount) {
    if (!this.state.authorization) {
      return null;
    }
    return (
      <PaymentFields
        vendor={this.state.type}
        authorization={this.state.authorization}
        onError={this.onError}
        onValidityChange={this.onValidityChange}
        onCardTypeChange={this.onCardTypeChange}
        onReady={this.onFieldsReady}
        styles={{
          base: {
            "font-size": "16px",
            "font-family": "helvetica, tahoma, calibri, sans-serif",
            padding: "6px",
            color: "#7d6b6b"
          },
          focus: { color: "#000000" },
          valid: { color: "#00bf00" },
          invalid: { color: "#a00000" }
        }}
      >
        <div>
          <Label>
            Card number
            <StyledPaymentFieldsField
              type="cardNumber"
              placeholder="•••• •••• •••• ••••"
              onValidityChange={this.onNumberValid}
            />
          </Label>
          <Checkbox name="payCharges">
            Cover the transaction fees. This will add £{(amount / 100).toFixed(2)} to your total.
          </Checkbox>
          <p>Card type: {this.state.card}</p>
          <Label>
            Expiary date
            <StyledPaymentFieldsField type="expirationDate" placeholder="MM/YY" />
          </Label>
          <Label>
            CVV
            <StyledPaymentFieldsField type="cvv" />
          </Label>
        </div>
      </PaymentFields>
    );
  }

  render() {
    const { type } = this.state;

    return (
      <div>
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
          onSubmit={ async values => {
            const token = await this.getToken();
            if (this.state.type === "Stripe") {
              fetch("https://ornovia.com/payment", {
                method: "POST",
                body: JSON.stringify({
                  token: token.id,
                  amount: values.donationAmount * 100
                })
              })
              .then(response => {
                if (response.ok) return response.json();
                throw new Error("Something went wrong ...");
              })
              .then(data => alert(JSON.stringify(data)));
            }
            if (this.state.type === "Braintree") {
              fetch("https://k5i9d7lehh.execute-api.eu-west-2.amazonaws.com/dev/checkout", {
                method: "POST",
                body: JSON.stringify({
                  paymentMethodNonce: token.nonce,
                  amount: values.donationAmount
                })
              })
              .then(response => {
                if (response.ok) return response.json();
                throw new Error("Something went wrong ...");
              })
              .then(data => alert(JSON.stringify(data)));
            }
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
                  With Gift Aid, your donation of £20.00 would be worth £25.00
                  at no extra cost to you.
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
                  I want to Gift Aid my donation and any donations I make in the
                  future or have made in the past 4 years, to Cancer Research
                  UK. I am a UK taxpayer and understand that if I pay less
                  Income Tax and/or Capital Gains Tax than the amount of Gift
                  Aid claimed on all of my donations in that tax year it is my
                  responsibility to pay any difference. Cancer Research UK will
                  claim 25p on every £1 donated.
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
                <StyledLegend>Select payment provider</StyledLegend>
                <p>This could be switched by token responce time, last payment execution time...</p>
                <div className="type-selection">
                  {["Stripe", "Braintree"].map(k => (
                    <label key={k}>
                      <input
                        type="radio"
                        name="type"
                        checked={k === type}
                        value={k}
                        onChange={this.onTypeChange}
                      />{" "}
                      {k}
                    </label>
                  ))}
                </div>

                {this.renderFields(values.donationAmount)}
                <Button
                  disabled={!this.state.ready || !this.state.valid}
                  //onClick={this.getToken}
                  onClick={handleSubmit}
                  appearance="primary"
                >
                  Make payment
                </Button>
              </StyledFieldset>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
