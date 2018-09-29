var iNATURAL_query_url = "https://api.inaturalist.org/v1/observations/species_counts?photos=true&popular=true&verifiable=true&day=30%2C31%2C01%2C02&month=05%2C06";


// get information back from the inaturalist api
// Query Parameters
var trip = {
    startDate : "07/29/2018",
    endDate : "08/11/2018",
    destination : "Yellowstone",
};




var dumStartDate = "06/25/2018";
var dumEndDate = "08/29/2018";

// getting trip info from dom


var returnDays = (startD, endD) => {
    var sDate = moment(startD);
    var eDate = moment(endD);
    var days = [];
    while (sDate <= eDate) {
        var day = moment(sDate).format("D");
        days.push(day);
        sDate = moment(sDate).add(1, "d");
    }
    console.log(days);
    return days.join('%2C');
};
var returnMonths = (startM, endM) => {
    var sMonth = moment(startM);
    var eMonth = moment(endM);
    var months = [];
    while (sMonth <= eMonth) {
        var month = moment(sMonth).format("M");
        months.push(month);
        sMonth = moment(sMonth).add(1, "M");
    }
    console.log("months", months);
    return months.join('%2C');

};
// returnMonths(dumStartDate, dumEndDate);
// returnDays(dumStartDate, dumEndDate);


var popular = true;
var photos = true;
var verifiable = true;

function iNatAPI(trip) {

    var daysString = returnDays(trip.startDate, trip.endDate);
    var monthString = returnMonths(trip.startDate, trip.endDate);
    var responNum = 25;
    var local = trip.destination;
    var queryURL = `https://api.inaturalist.org/v1/observations/species_counts?photos=true&popular=true&verifiable=true&day=${daysString}&month=${monthString}&local=${local}&per_page=${responNum}`
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var res = response.results;
        for (var i = 0; i < res.length; i++) {
            var name = res[i].taxon.preferred_common_name;
            var imgURL = res[i].taxon.default_photo.medium_url;
            var wikiLink = res[i].taxon.wikipedia_url;
            console.log([name, imgURL, wikiLink]);
        }


    });
}


$(document).ready(function () {
    $("#btn-submit").on("click", function (event) {
        event.preventDefault();
        trip.destination = $("#destination").val().trim();
        console.log("trip.destination", trip.destination);
    });
});


var getDates = () => {
    
};

// jQuery plugin for the date range found here "http://www.daterangepicker.com/"
$(function () {
    $('input[name="daterange"').daterangepicker({
        opens: 'right'
    }, function (start, end) {
        trip.startDate = start.format('MM-DD-YYYY');
        trip.endDate = end.format('MM-DD-YYYY');
        console.log(trip.startDate, trip.endDate);
    });
});
