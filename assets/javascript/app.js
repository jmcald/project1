var iNATURAL_query_url = "https://api.inaturalist.org/v1/observations/species_counts?photos=true&popular=true&verifiable=true&day=30%2C31%2C01%2C02&month=05%2C06";


// get information back from the inaturalist api
// Query Parameters
var trip = {
    startDate: "",
    endDate: "",
    destination: "Yellowstone",
};
// Very long array of Nation Parks and their IDs. 
//We would have liked to get this from an API, but the NPS api did not provide this. 
var destinationArr = [
    {   parkID: "ACAD",
        name: "Acadia National Park"
    }, {
        parkID: "ARCH",
        name: "Arches National Park"
    }, {
        parkID: "BADL",
        name: "Badlands National Park"
    }, {
        parkID: "BIBE",
        name: "Big Bend National Park"
    }, {
        parkID: "BISC",
        name: "Biscayne National Park"
    }, {
        parkID: "BLCA",
        name: "Black Canyon Of The Gunnison National Park"
    }, {
        parkID: "BRCA",
        name: "Bryce Canyon National Park"
    }, {
        parkID: "CANY",
        name: "Canyonlands National Park"
    }, {
        parkID: "CARE",
        name: "Capitol Reef National Park"
    }, {
        parkID: "CAVE",
        name: "Carlsbad Caverns National Park"
    }, {
        parkID: "CHIS",
        name: "Channel Islands National Park"
    }, {
        parkID: "CONG",
        name: "Congaree National Park"
    }, {
        parkID: "CRLA",
        name: "Crater Lake National Park"
    }, {
        parkID: "CUVA",
        name: "Cyahoga Valley National Park"
    }, {
        parkID: "DENA",
        name: "Denali National Park and Preserve"
    }, {
        parkID: "DEVA",
        name: "Death Valley National Park"
    }, {
        parkID: "DRTO",
        name: "Dry Tortugas National Park"
    }, {
        parkID: "EVER",
        name: "Everglades National Park"
    }, {
        parkID: "GAAR",
        name: "Gates Of The Arctic National Park and Preserve"
    }, {
        parkID: "GLAC",
        name: "Glacier National Park"
    }, {
        parkID: "GLBA",
        name: "Glacier Bay National Park and Preserve"
    }, {
        parkID: "GRBA",
        name: "Great Basin National Park"
    }, {
        parkID: "GRCA",
        name: "Grand Canyon National Park"
    }, {
        parkID: "GRSA",
        name: "Great Sand Dunes National Park and Preserve"
    }, {
        parkID: "GRSM",
        name: "Great Smoky Mountain National Park"
    }, {
        parkID: "GRTE",
        name: "Grand Teton National Park"
    }, {
        parkID: "GUMO",
        name: "Guadalupe Mountains National Park"
    }, {
        parkID: "HALE",
        name: "Haleakala National Park"
    }, {
        parkID: "HAVO",
        name: "Hawaii Volcanoes National Park"
    }, {
        parkID: "HOSP",
        name: "Hot Springs National Park"
    }, {
        parkID: "ISRO",
        name: "Isle Royale National Park"
    }, {
        parkID: "JOTR",
        name: "Joshua Tree National Park"
    }, {
        parkID: "KATM",
        name: "Katmai National Park and Preserve"
    }, {
        parkID: "KEFJ",
        name: "Kenai Fjords National Park"
    }, {
        parkID: "KICA",
        name: "Kings Canyon National Park"
    }, {
        parkID: "KOVA",
        name: "Kobuk Valley National Park"
    }, {
        parkID: "LACL",
        name: "Lake Clark National Park and Preserve"
    }, {
        parkID: "LAVO",
        name: "Lassen Volcanic National Park"
    }, {
        parkID: "MACA",
        name: "Mammoth Cave National Park"
    }, {
        parkID: "MEVE",
        name: "Mesa Verde National Park"
    }, {
        parkID: "MORA",
        name: "Mount Rainier National Park"
    }, {
        parkID: "NOCA",
        name: "North Cascades National Park"
    }, {
        parkID: "NPSA",
        name: "National Park of American Samoa National Park"
    }, {
        parkID: "OLYM",
        name: "Olympic National Park"
    }, {
        parkID: "PEFO",
        name: "Petrified Forest National Park"
    }, {
        parkID: "REDW",
        name: "Redwood National Park"
    }, {
        parkID: "ROMO",
        name: "Rocky Mountain National Park"
    }, {
        parkID: "SAGU",
        name: "Saguaro National Park"
    }, {
        parkID: "SEKI",
        name: "Sequoia and Kings Canyon National Parks"
    }, {
        parkID: "SEQU",
        name: "Sequoia National Park"
    }, {
        parkID: "SHEN",
        name: "Shenandoah National Park"
    }, {
        parkID: "THRO",
        name: "Theodore Roosevelt National Park"
    }, {
        parkID: "VOYA",
        name: "Voyageurs National Park"
    }, {
        parkID: "WICA",
        name: "Wind Cave National Park"
    }, {
        parkID: "WRST",
        name: "Wrangell - St Elias National Park and Service"
    }, {
        parkID: "YELL",
        name: "Yellowstone National Park"
    }, {
        parkID: "YOSE",
        name: "Yosemite National Park"
    }, {
        parkID: "ZION",
        name: "Zion National Park"
    }
];



// var dumStartDate = "06/25/2018";
// var dumEndDate = "08/29/2018";

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
    populateDestinations(destinationArr);

    $("#btn-submit").on("click", function (event) {
        event.preventDefault();
        trip.destination = $("#destination").val().trim();
        console.log("trip.destination", trip.destination);
    });

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

function populateDestinations(arr) {
    for (var i = 0; i < arr.length; i++) {
        var newAnchor = $("<a>");
        newAnchor.attr("parkID", arr[i].parkID).attr("park-name", arr[i].name).addClass("dropdown-item").text(arr[i].name);
        $("#park-dropdown").append(newAnchor);
    }
}
