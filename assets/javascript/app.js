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
    {
        parkID: "ABLI",
        name: "Abraham Lincoln Birthplace National Historical Park"
    }, {
        parkID: "ACAD",
        name: "Acadia National Park"
    }, {
        parkID: "ADAM",
        name: "Adams National Historical Park"
    }, {
        parkID: "ADNM",
        name: "Adams National Monument"
    }, {
        parkID: "AFAM",
        name: "African American Civil War Memorial National Memorial"
    }, {
        parkID: "AFBG",
        name: "African Burial Ground National Monument"
    }, {
        parkID: "AGFO",
        name: "Agate Fossil Beds National Monument"
    }, {
        parkID: "ALAG",
        name: "Alagnak Wild River National Wild And Scenic River"
    }, {
        parkID: "ALCA",
        name: "ALcatraz Island"
    }, {
        parkID: "ALEU",
        name: "Aleutian World War II National HIstoric Area"
    }, {
        parkID: "ALFL",
        name: "Alibates Flint Quarries National Monument"
    }, {
        parkID: "ALPO",
        name: "Allegheny Portage Railroad National Historic Site"
    }, {
        parkID: "AMIS",
        name: "Amistad National Recreation Area"
    }, {
        parkID: "ANAC",
        name: "Anacostia Park"
    }, {
        parkID: "ANDE",
        name: "Andersonville Natinla Historic Site"
    }, {
        parkID: "ANIA",
        name: "Aniakchak National Monument and Preserve"
    }, {
        parkID: "ANJO",
        name: "Andrew Johnson National Historic Site"
    }, {
        parkID: "ANTI",
        name: "Antietam National Battlefield"
    }, {
        parkID: "APCO",
        name: "Appomattox Court House National Historical Park"
    }, {
        parkID: "APIS",
        name: "Apostle Islands National Lakeshore"
    }, {
        parkID: "APPA",
        name: "Appalachian National Scenic Trail"
    }, {
        parkID: "ARCH",
        name: "Arches National Park"
    }, {
        parkID: "ARHO",
        name: "Arlington House The Robert E. Lee Memorial"
    }, {
        parkID: "ARPO",
        name: "Arkansas Post National Memorial"
    }, {
        parkID: "ASIS",
        name: "Assateague Island National Seashore"
    }, {
        parkID: "AZRU",
        name: "Aztec Ruins National Monument"
    }, {
        parkID: "BADL",
        name: "Badlands National Park"
    }, {
        parkID: "BAND",
        name: "Bandelier National Monument"
    }, {
        parkID: "BAWA",
        name: "Baltimore-Washington National Parkway"
    }, {
        parkID: "BELA",
        name: "Bering Land Bridge National Preserve"
    }, {
        parkID: "BEOL",
        name: "Bent's Old Fort National Historic Site"
    }, {
        parkID: "BEPA",
        name: "Bear Paw Battlefield"
    }, {
        parkID: "BIBE",
        name: "Big BEnd National Park"
    }, {
        parkID: "BICA",
        name: "Bighorn Canyon National Recreation Area"
    }, {
        parkID: "BICY",
        name: "Big Cypress National Preserve"
    }, {
        parkID: "BIHO",
        name: "Big Hole National Battlefield"
    }, {
        parkID: "BISC",
        name: "Biscayne National Park"
    }, {
        parkID: "BISO",
        name: "Big South Fork National River and Recreation Area National River"
    }, {
        parkID: "BITH",
        name: "Big Thicket National Preserve"
    }, {
        parkID: "BLCA",
        name: "Black Canyon Of The Gunnison National Park"
    }, {
        parkID: "BLRI",
        name: "Blue Ridge Parkway"
    }, {
        parkID: "BLUE",
        name: "Bluestone National Scenic River National Wild And Scenic River"
    }, {
        parkID: "BOAF",
        name: "Boston African American National Historic Site"
    }, {
        parkID: "BOHA",
        name: "Boston Harbor Islands National Recreation Area"
    }, {
        parkID: "BOST",
        name: "Boston National Historical Park"
    }, {
        parkID: "BOWA",
        name: "Booker T. Washington National Monument"
    }, {
        parkID: "BRCA",
        name: "Bryce Canyon National Park"
    }, {
        parkID: "BRCR",
        name: "Brices Cross Roads National Battlefield Site"
    }, {
        parkID: "BRVB",
        name: "Brown v. Board Of Education National Historic Site"
    }, {
        parkID: "BUFF",
        name: "Buffalo National River"
    }, {
        parkID: "BUIS",
        name: "Buck Island Reef National Monument"
    }, {
        parkID: "CABR",
        name: "Cabrillo National Monument"
    }, {
        parkID: "CACH",
        name: "Canyon De Chelly National Monument"
    }, {
        parkID: "CACL",
        name: "Castle Clinton National Monument"
    }, {
        parkID: "CACO",
        name: "Cape Cod National Seashore"
    }, {
        parkID: "CAGR",
        name: "Casa Grande Ruins National Monument"
    }, {
        parkID: "CAHA",
        name: "Cape Hatteras National Seashore"
    }, {
        parkID: "CAHE",
        name: "Capitol Hill Parks"
    }, {
        parkID: "CAKR",
        name: "Cape Krusenstern National Monument"
    }, {
        parkID: "CALO",
        name: "Cape Lookout National Seashore"
    }, {
        parkID: "CAME",
        name: "Cape Henry National Memorial"
    }, {
        parkID: "CANA",
        name: "Canaveral National Seashore"
    }, {
        parkID: "CANY",
        name: "Canyonlands National Park"
    }, {
        parkID: "CARE",
        name: "Capitol Reef National Park"
    }, {
        parkID: "CARI",
        name: "Cane River Creole National Historical Site"
    }, {
        parkID: "CARL",
        name: "Carl Sandburg Home National Historic Site"
    }, {
        parkID: "CASA",
        name: "Castillo De San Marcos National Monument"
    }, {
        parkID: "CATO",
        name: "Catocin Mountain Park"
    }, {
        parkID: "CAVE",
        name: "Carlsbad Caverns National Park"
    },
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


var getDates = () => {

};

// jQuery plugin for the date range found here "http://www.daterangepicker.com/"
$(function () {
    $('input[name="daterange"').daterangepicker({
        opens: 'left'
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
