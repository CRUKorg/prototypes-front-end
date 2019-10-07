import React from "react";
import { Link } from "gatsby";
import { Elements, StripeProvider } from "react-stripe-elements-universal";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import CustomCheckoutForm from '../components/CustomCheckoutForm';

const IndexPage = () => (
  <Layout>
    <h1>Payment examples</h1>
    Built as a proof on concept using Online Fundraising's React components see <a href="https://fundraise.int.cruk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/react/docs/">docs</a>
    in a static frontend compiled by Gatsby which can be delivered directly from CDN without the need for a frontend server.
    Test cards can be found at <a href="https://stripe.com/docs/testing">stripe.com/docs/testing</a>
    <h2><Link to="/example-1/">Example 1</Link></h2>
    <ul>
      <li>Implement Stripe's combined field and place holder for Paypal.</li>
      <li>Serverless backend implemented on Cloudflare Edge Workers.</li>
      <li>Stripe's combined field appears to be completely unaccessible for screen reader users.</li>
    </ul>
    <h2><Link to="/example-2/">Example 2</Link></h2>
    <ul>
      <li>Example switching theme to SU2C.</li>
    </ul>
    <h2><Link to="/example-3/">Example 3</Link></h2>
    <ul>
      <li>Example implementing Braintree and Stripe hosted fields using payment-fields to give a single api to work with.</li>
      <li>Serverless backend implemented on Cloudflare Edge Workers for Stripe and AWS Lambda with API Gateway for Braintree, just because.</li>
      <li>Currently provider can be switched by an input on the front end but this could be load balanced, based on previous response time, day of the week...</li>
      <li>To improve performance initial request for Braintree could be handled directly by API Gateway without the need of the Lambda function.</li>
    </ul>
  </Layout>
);

export default IndexPage;
