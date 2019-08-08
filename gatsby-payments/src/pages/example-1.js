import React from 'react';
import { Elements, StripeProvider } from "react-stripe-elements-universal";

import Layout from "../components/layout";
import SEO from "../components/seo";

import CustomCheckoutForm from '../components/CustomCheckoutForm';

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Example 1" />
        <StripeProvider apiKey="pk_test_5r9fnuslIznmQtNHSkRV3HQj00w1467fNY">
          <Elements>
            <CustomCheckoutForm />
          </Elements>
        </StripeProvider>
      </Layout>
    );
  }
}

export default MyStoreCheckout;
