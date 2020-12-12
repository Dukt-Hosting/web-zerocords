let express = require("express");
let { STATUS_CODES } = require("http");
let fetch = require("node-fetch");
let session = require("express-session");
let server = express();
let config = require('./config/config.json')

server.use(express.urlencoded({ extended: false }));
//server.set("view engine", "hbs");
server.use(
  session({
    secret: config.sessionsecret,
    resave: false,
    saveUninitialized: true
  })
);

server.get("/", (req, res) => {
  if (!req.session.user) {
    req.session.state = require("crypto")
      .randomBytes(8)
      .toString("hex");
    return res.redirect(
      "https://discord.com/api/oauth2/authorize?client_id=" +
        config.clientid +
        "&redirect_uri=localhost%3A3000/callback&response_type=code&scope=identify%20guilds&state=" +
        req.session.state
    );
  } else {
    if (req.session.allowed)
      return res.send('WOW YOU ARE POG!')
    else
      return sendError(
        res,
        403,
        "You are not allowed to access this area.",
        false
      );
  }
});

server.put("/", (req, res) => {
  if (!req.session.user)
    return sendError(
      res,
      401,
      "You must log in to perform this action.",
      false
    );
  if (!req.session.allowed)
    return sendError(
      res,
      403,
      "You are not allowed to perform this action.",
      false
    );
  return res.status(500).end("not done unpoggers");
});

server.get("/callback", (req, res) => {
  if (req.session.user) return res.redirect("/");
  if (!req.session.state)
    return sendError(
      res,
      403,
      "There was an issue confirming your login attempt was legitimate. Try again later, and if you're still having issues it could be caused by cookie settings or ad blockers.",
      false
    );
  fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    // this is pretty insecure and should be rewritten using url.URLSearchParams later
    body:
      "client_id=" +
      config.clientid +
      "&client_secret=" +
      config.clientsecret +
      "&grant_type=authorization_code&code=" +
      req.query.code +
      "&redirect_uri=https%3A%2F%2Fauth.cmpc.cf%2Fcallback&state=" +
      req.session.state
  })
    .then(token => token.json())
    .then(token => {
      if (token.error) {
        return sendError(
          res,
          403,
          "Your Discord authentication failed: " + token.error,
          false
        );
      } else {
        fetch("https://discord.com/api/users/@me", {
          headers: {
            authorization: [token.token_type, token.access_token].join(" ")
          }
        })
          .then(user => user.json())
          .then(user => {
            req.session.allowed = process.env.ALLOWED_USERS.split(",").includes(
              user.id
            );
            req.session.user = user;
            return res.redirect("/");
          });
      }
    });
});

function sendError(res, code, message, json) {
  res.status(code);
  if (json) return res.json({ success: false, error: message });
  else
    return res.render("error", { code, status: STATUS_CODES[code], message });
}

server.listen(3000);