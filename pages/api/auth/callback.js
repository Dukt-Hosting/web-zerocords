import { withIronSession } from "next-iron-session";
import config from '../../../config.js'
const url = require('url');

const apiEndpoint = 'https://discord.com/api/v8'

async function handler(req, res) {
    let query = url.parse(req.url);
    let code = query.code;

    data = {
        'client_id': config.discordID,
        'clientSecret': config.discordSecret,
        'grant_type': 'authorization',
        'code': code,
        'redirect_uri': 'https://zerocords.xyz/dashboard',
        'scope': 'identify guilds'

    }

    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    opts = {
        method: 'post',
        body: JSON.stringify(data),
        headers: headers
    }

    let response = await fetch(`${apiEndpoint}/oauth2/token`, opts)

    let resjson = await response.json()

    let token = resjson.access_token

    // get user from database then:
    req.session.set("user", {
        id: 230,
    });
    await req.session.save();
    res.send("Logged in");
}

export default withIronSession(handler, {
    password: config.sessionKey,
    // if your localhost is served on http:// then disable the secure flag
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});

