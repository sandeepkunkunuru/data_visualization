define([
    'jquery',
    'jquery_ui',
    'underscore',
    'backbone',
    'models/project',
    'collections/projects',
    // Using the Require.js text! plugin, we are loading raw text
    // which will be used as our views primary template
    'text!templates/projects/list.html'
], function($, ui, _, Backbone, ProjectModel, ProjectCollection, projectListTemplate){
    var ProjectListView = Backbone.View.extend({
        el: $('#mvc_id'),
        render: function(){
            // Using Underscore we can compile our template with data
            var data = {
                projects: [new ProjectModel()],
                _: _
            };
            console.log(projectListTemplate);
            var compiledTemplate = _.template( projectListTemplate, data );
            // Append our compiled template to this Views "el"
            $(this.el).html( compiledTemplate );
        }
    });
    // Our module now returns our view
    return ProjectListView;
});