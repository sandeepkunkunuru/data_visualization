// Require.js allows us to configure shortcut alias
require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        jquery_ui: 'libs/jquery/jquery-ui',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone'
    }

});

require(['app'], function(App){ App.initialize();});