const express=require("express");
const { auth } = require('express-openid-connect');
const app=express();

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'http://localhost:3000',
  clientID: '8yWi1It1dWPxeY1BY5reZFHVFhAKbQVC',
  issuerBaseURL: 'https://dev-ampng1ahdzxik2vq.us.auth0.com',
  secret: 'a long, randomly-generated string stored in env',
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});

app.get("/profile",(req,res)=>{
    res.send(JSON.stringify(req.oidc.user))
})
app.listen(3000,()=>{
    console.log("server running at 3000");
})