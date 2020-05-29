"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyServer = void 0;
var Http = require("http");
var Url = require("url");
var MyServer;
(function (MyServer) {
    var server = Http.createServer();
    //console.log(server);
    var port = process.env.port;
    if (port == undefined) {
        port = 5001;
    }
    console.log("server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            var url = Url.parse(_request.url, true);
            console.log(url.query);
            var jsonString = JSON.stringify(url.query);
            _response.write("jsonString: " + jsonString);
        }
        _response.write("This is my response");
        _response.end();
    }
})(MyServer = exports.MyServer || (exports.MyServer = {}));
//# sourceMappingURL=NodeTest.js.map