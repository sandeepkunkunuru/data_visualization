/**
 * Created by sandeep on 8/12/14.
 */
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define([ "jquery" ], factory );
    } else {

        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {
    $(document).ready(function () {
        $("#msg_id").html("This is Hello World by JQuery");
    });
}));