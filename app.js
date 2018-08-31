$.getJSON( "data.json", function( data ) {
    var items = [];
    $.each( data["data"], function( key, val ) {
        items.push( "<li id='" + key + "'>" + val["type"] + " " + val["number"] + "</li>" );
    });

    _.templateSettings.variable = "rc";

    var template = _.template($("#template").html());

    var dataObj = { d: data["data"] };

    console.log("aaa" + JSON.stringify(data["data"]));

    $("#content").append(
        template( dataObj )
    );
});