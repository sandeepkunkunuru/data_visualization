/**
 * Created by sandeep on 8/12/14.
 */
console.log( "loaded" );

require([ "jquery", "jquery-ui" ], function( $ ) {
    $( "<input>" )
        .autocomplete({ source: [ "One", "Two", "Three" ]})
        .appendTo( "body" );

    $( "<input>" )
        .appendTo( "body" )
        .datepicker();
});

require([ "sample" ], function( $ ) {
});