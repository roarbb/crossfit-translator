class Url {
  /*
  * parser.protocol; // => "http:"
  * parser.host;     // => "example.com:3000"
  * parser.hostname; // => "example.com"
  * parser.port;     // => "3000"
  * parser.pathname; // => "/pathname/"
  * parser.hash;     // => "#hash"
  * parser.search;   // => "?search=test"
  * parser.origin;   // => "http://example.com:3000"
  */
  get actualUrl() {
    const parser = document.createElement("a");
    parser.href = window.location.href;

    return parser;
  }

  get params() {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
          // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
          // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
        query_string[pair[0]] = arr;
          // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return query_string;
  }
}

export default Url;
