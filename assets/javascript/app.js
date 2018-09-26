var iNATURAL_query_url = "https://api.inaturalist.org/v1/observations/species_counts?photos=true&popular=true&verifiable=true&day=30%2C31%2C01%2C02&month=05%2C06";


// get information back from the inaturalist api
// Query Parameters
var days = [];
var months = [];
var popular = true;
var photos = true;
var verifiable = true;

function callAPI() {
    $.ajax({
        url: "https://api.inaturalist.org/v1/observations/species_counts?photos=true&popular=true&verifiable=true&day=30%2C31%2C01%2C02&month=05%2C06",
        method: "GET"
    }).then(function (res) {
        console.log(res);
        var length = res.total_results;
        var name;
        var img;
        
    });
}