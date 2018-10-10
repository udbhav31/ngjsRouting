angular.module("mallapp",["ngComponentRouter"])
  .value("$routerRootComponent","mallapp");

document.addEventListener("DOMContentLoaded", function(){
    angular.bootstrap(document.getElementById("ngrouting"), ["mallapp"]);
})  