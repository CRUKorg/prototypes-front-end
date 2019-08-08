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

This is a very rough POC to use Online Fundraising's UI components to build a donation form powered by stripe and compiled by Gatsby.

The backend is a serverless function created on Cloudflare the code for this can be found in the file ```cloudflare-worker.js```

The backend could be accessed from any of our products or by redirecting to the Gatsby forms. To aid integration directly into site React or native JS components could be created to wrap stripe and Paypal in a consistent way.
