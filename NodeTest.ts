import * as Http from "http";
import * as Url from "url";

export namespace MyServer {
  let server: Http.Server = Http.createServer();
  //console.log(server);

  let port: number | string | undefined = process.env.port

  if(port == undefined)
  {
      port = 5001;
  }

  console.log("server starting on port:" + port);

  server.listen(port);
  server.addListener("request", handleRequest);


  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
      console.log("What's up?");

      _response.setHeader("content-type", "text/html; charset=utf-8");
      _response.setHeader("Access-Control-Allow-Origin", "*"); 


      if(_request.url) {
          let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
          console.log(url.query);

          let jsonString: string = JSON.stringify(url.query);         
          _response.write("jsonString: " + jsonString);
      }


      
      
      _response.write("This is my response");
      _response.end();
  }


}

