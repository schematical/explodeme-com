import { NextResponse, NextRequest } from 'next/server'
import {NextURL} from "next/dist/server/web/next-url";

import posthog from 'posthog-js'
// This function can be marked `async` if using `await` inside
export async function  middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    /*const ckSubscriberId = '2770007407'; // request.nextUrl.searchParams.get('ck_subscriber_id')
    if(ckSubscriberId) {
        const url = `https://api.convertkit.com/v3/subscribers/${ckSubscriberId}?api_secret=${process.env.CONVERTKIT_API_SECRET}`;
        const res = await fetch(url);
        const json = await res.json();
        requestHeaders.set("x-ck-email", json.subscriber.email_address);
        const res2 = posthog.identify(
            json.subscriber.email_address,  // Replace 'distinct_id' with your user's unique identifier
            {
                email: json.subscriber.email_address,
                name: `${json.subscriber.first_name || ''} ${json.subscriber.last_name || ''}`
            } // optional: set additional person properties
        );
        console.log("RES: ",   json.subscriber.email_address,  // Replace 'distinct_id' with your user's unique identifier
            {
                email: json.subscriber.email_address,
                name: `${json.subscriber.first_name} ${json.subscriber.last_name}`
            }
        );
    }*/

    // console.log("request?.headers?.get('host'):", request?.headers?.get('host'));
    requestHeaders.set("x-pathname", request.nextUrl.pathname);
    requestHeaders.set("x-host", request?.headers?.get('host') || request.nextUrl.host);
    const traceId = request?.headers?.get('X-Amzn-Trace-Id');
    if(traceId) {
        requestHeaders.set("X-Amzn-Trace-Id", traceId);
    }
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/:path*'
    ],
}