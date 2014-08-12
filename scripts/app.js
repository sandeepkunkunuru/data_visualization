/**
 * Created by sandeep on 8/12/14.
 */
console.log( "loaded" );

require([ "jquery", "jquery-ui", "bootstrap" ], function( $, ui, bs ) {
    $( "<input>" )
        .autocomplete({ source: [ "One", "Two", "Three" ]})
        .appendTo( "#ac_id" );

    $( "<input>" )
        .appendTo( "#dp_id" )
        .datepicker();
});


require([ "sample" ], function( sample ) {
});