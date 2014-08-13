(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define([ "jquery", "jquery_ui" ], factory );
    } else {

        // Browser globals
        factory( jQuery, jQuery.ui );
    }
}(function( $, ui ) {
    $(document).ready(function () {
        $("#msg_id").html("This is Hello World by JQuery");
        $( "<input>" )
            .autocomplete({ source: [ "One", "Two", "Three" ]})
            .appendTo( "#ac_id" );

        $( "<input>" )
            .appendTo( "#dp_id" )
            .datepicker();
    });
}));