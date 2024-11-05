import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(request) {
    try {
        // Extract the path from the request URL
        const url = new URL(request.url);
        const pathSegments = url.pathname.split('/'); // Split the URL path into segments

        // The sessionId should be the last segment of the path
        const sessionId = pathSegments[pathSegments.length - 1];

        console.log("Session Id: " + sessionId);
        console.log("Type of from Route: " + typeof(sessionId));

        // Validate the sessionId format
        if (!sessionId || !sessionId.startsWith('cs_')) {
            return new Response(
                JSON.stringify({ error: "Incorrect Checkout sessionId" }), 
                { status: 400 }
            );
        }

        // Retrieve the Checkout Session from Stripe
        const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['payment_intent', 'line_items.data.price.product'],
        });

        return new Response(JSON.stringify(checkoutSession), { status: 200 });
    } catch (error) {
        console.error("Error fetching session:", error);
        const errorMessage = error instanceof Error ? error.message : "Internal server error";
        return new Response(JSON.stringify({ statusCode: 500, message: errorMessage }), { status: 500 });
    }
}
