const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
    app.use(
        ["/api", "/auth/google"],
        createProxyMiddleware({
            target: "http://localhost:5000",
        })
    );
};

/* 1) So whats happening here is making a proxy so that if anyone tries to vist 
/auth/google on our react server automatically forward the request to localhost:5000
2) using the proxy library the react server can communicate with node/expres api ONLY IN DEV MODE
3) in prod mode the react server doesnt not exist thays why we use relative path with /auth/google
4) the react-app server only exists to give us a good development experience
5) another reason to why we are using proxy is beacuse this application is relies on cookies so if we send this 
request directly to localhost5000 the cookies will not be included instead we the send request back to localhost3000 
then use the proxy to forward the request to localhost5000
*/