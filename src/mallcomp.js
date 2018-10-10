(()=>{
    var constructor = (function(){
        function mallcomp(){

        }
        return mallcomp
    })();

    angular.module("mallapp").component("mallComp", {
        templateUrl : "mallapp.html",
        controller : constructor,
        constrollerAs : "fruitsCntrl"
    })
})();

