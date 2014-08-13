define([ 'jquery', 'jquery_ui', 'underscore', 'backbone', 'router', 'sample'], function($, ui, _, Backbone, Router){
    var initialize = function(){
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    }

    return {
        initialize: initialize
    };
});