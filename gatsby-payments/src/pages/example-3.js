import React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo";

import PaymentFieldsDemo from '../components/PaymentFieldsDemo';

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Example 3" />
        <PaymentFieldsDemo />
      </Layout>
    );
  }
}

export default MyStoreCheckout;
