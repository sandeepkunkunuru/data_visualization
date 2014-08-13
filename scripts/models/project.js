define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var ProjectModel = Backbone.Model.extend({
        defaults: {
            url: "#/projects",
            title: "Javascript Melange",
            name: "Javascript Melange"
        }
    });
    // Return the model for the module
    return ProjectModel;
});