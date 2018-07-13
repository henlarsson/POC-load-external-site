const hostUri = "http://localhost:8500/";

(function() {
  var req = new XMLHttpRequest();
  req.open("GET", hostUri + "asset-manifest.json");
  req.addEventListener("load", function() {
    loadManifest(this.responseText);
  });
  req.send();

  function loadManifest(data) {
    var manifest = JSON.parse(data);
    var css = hostUri + manifest["main.css"];
    document.body.innerHTML =
      '<div id="root"></div>' + '<link rel="stylesheet" href="' + css + '" />';

    var jsElement = document.createElement("script");
    jsElement.setAttribute("type", "text/javascript");
    jsElement.setAttribute("src", hostUri + manifest["main.js"]);
    document.body.appendChild(jsElement);
  }
})();
