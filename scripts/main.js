// Require.js allows us to configure shortcut alias
require.config({
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        "backbone":{deps: ["underscore", "jquery"]}
    },
    paths: {
        jquery: 'libs/jquery/jquery',
        jquery_ui: 'libs/jquery/jquery-ui',
        bootstrap: 'libs/bootstrap/bootstrap',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        templates: '../templates'
    }

});

require(['app'], function(App){ App.initialize();});