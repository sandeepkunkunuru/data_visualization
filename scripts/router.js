define([
    'jquery',
    'underscore',
    'backbone',
    'views/projects/list',
], function($, _, Backbone, ProjectListView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'projects': 'showProjects',
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;
        app_router.on('route:showProjects', function(){
            // Call render on the module we loaded in via the dependency array
            // 'views/projects/list'
            var projectListView = new ProjectListView();
            projectListView.render();
        });
        app_router.on('route:defaultAction', function(actions){
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});