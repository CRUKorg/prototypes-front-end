addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
  if (request.method === "OPTIONS") {
    return handleOptions(request)
  } else if (request.method === "POST") {
    const stripePrivateKey = "sk_test_YOUR-KEY-HERE"
    const { token, amount } = await request.json();

    // Do stuff here, conect to services, database etc
    return fetch('https://api.stripe.com/v1/charges', {
        method: "POST",
        headers: {
          Authorization: 'Basic ' + btoa(`${stripePrivateKey}:`),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
         amount,
         'currency': 'gbp',
         'source': token,
        }),
      }
    )
  } else {
    return new Response(null, {
      status: 405,
      statusText: "Method Not Allowed",
    })
  }
}

// Lock down origins here.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

function handleOptions(request) {
  if (request.headers.get("Origin") !== null &&
      request.headers.get("Access-Control-Request-Method") !== null &&
      request.headers.get("Access-Control-Request-Headers") !== null) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: corsHeaders
    })
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        "Allow": "GET, HEAD, POST, OPTIONS",
      }
    })
  }
}