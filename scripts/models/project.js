define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var ProjectModel = Backbone.Model.extend({
        defaults: {
            name: "Javascript Melange"
        }
    });
    // Return the model for the module
    return ProjectModel;
});