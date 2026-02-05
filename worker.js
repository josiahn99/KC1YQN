// Cloudflare Worker script
let lastHeardData = {};  // global variable to store latest JSON

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

  // Handle preflight CORS requests (Chrome requires this)
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  // Handle POST requests from Pi-Star
  if (request.method === "POST") {
    try {
      const data = await request.json()   // parse incoming JSON
      lastHeardData = data                // store latest data
      return new Response('OK', {
        status: 200,
        headers: { "Access-Control-Allow-Origin": "*" }
      })
    } catch (err) {
      return new Response('Invalid JSON', { status: 400 })
    }
  }

  // Handle GET requests from your website
  if (request.method === "GET") {
    return new Response(JSON.stringify(lastHeardData), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
  }

  // Any other method → not allowed
  return new Response('Method not allowed', { status: 405 })
}