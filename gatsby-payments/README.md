<h1 align="center">
  CRUK components Payment examples
</h1>

# Payment examples

Built as a proof on concept using Online Fundraising's React components see [docs](https://fundraise.int.cruk.org/profiles/cruk_fundraising/themes/cruk_of_bootstrap/react/docs/) in a static frontend compiled by Gatsby which can be delivered directly from CDN without the need for a frontend server. Test cards can be found at [stripe.com/docs/testing](https://stripe.com/docs/testing)

## Example 1

*   Implement Stripe's combined field and place holder for Paypal.
*   Serverless backend implemented on Cloudflare Edge Workers. ```cloudflare-worker.js```
*   Stripe's combined field appears to be completely unaccessible for screen reader users.

## Example 2

*   Example switching theme to SU2C.

## Example 3

*   Example implementing Braintree and Stripe hosted fields using payment-fields to give a single api to work with.
*   Serverless backend implemented on Cloudflare Edge Workers for Stripe and AWS Lambda with API Gateway for Braintree, just because.
*   Currently provider can be switched by an input on the front end but this could be load balanced, based on previous response time, day of the week...
*   To improve performance initial request for Braintree could be handled directly by API Gateway without the need of the Lambda function.

<h1 align="center">
  Gatsby payments
</h1>


## 🚀 Quick start

1.  **Install npm modules**

    ```sh
    npm install
    ```

1.  **Start developing.**

    ```sh
    gatsby develop
    ```


