const http = require("http");
const url = require("url");
const hostname = "127.0.0.1";
const fs = require("fs");
const port = 3000;

http.createServer(respond).listen(port, () => {
    console.log(`Server up and running at ${hostname}:${port}`);
});

function respond(req, res) {
    let params = url.parse(req.url, true);

    // If correct path & key is entered show HTML file
    if (params.pathname == "/secret" && params.query.key == "ALBATROSS") {
        fs.readFile("./secret.html", function(err, secretFile) {
            if (err) {
                console.log(err);
                res.end(`${err}`);
                return;
            }
            res.setHeader("Content-Type", "text/html");
            res.end(secretFile);
        });
        return;
    }

    // If correct path is NOT entered show text file
    fs.readFile("./public.txt", function(err, publicText) {
        if (err) {
            console.log(err);
            res.end(`${err}`);
            return;
        }
        res.setHeader("Content-Type", "text/plain");
        res.end(publicText);
    });
}