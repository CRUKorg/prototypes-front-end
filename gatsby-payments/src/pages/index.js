import React from "react";
import { Link } from "gatsby";
import { Elements, StripeProvider } from "react-stripe-elements-universal";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import CustomCheckoutForm from '../components/CustomCheckoutForm';

const IndexPage = () => (
  
    <Layout>
      <ul>
        <li>
          <Link to="/example-1/">Seller 1</Link>
        </li>
        <li>
          <Link to="/example-2/">Seller 2</Link>
        </li>
      </ul>
    </Layout>
);

export default IndexPage;
