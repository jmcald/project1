var iNATURAL_query_url = "https://api.inaturalist.org/v1/observations/species_counts?photos=true&popular=true&verifiable=true&day=30%2C31%2C01%2C02&month=05%2C06";


// get information back from the inaturalist api
// Query Parameters
var days = [];
var months = [];
var popular = true;
var photos = true;
var verifiable = true;

var dumStartDate = "06/25/2018";
var dumEndDate = "08/04/2018";

// getting trip info from dom
// var location = $("#destination").val().trim();
// var startDate = $("#start-date").val().trim();
// var endDate = $("#date-range-end").val().trim();

var returnDays = (startD, endD) => {
    var sDate = moment(startD);
    var eDate = moment(endD);

    while (sDate <= eDate) {
        var day = moment(sDate).format("D");
        days.push(day);
        sDate = moment(sDate).add(1, "d");
    }
    console.log(days);

};
var returnMonths = (startD, endD) => {
    var sMonth = moment(startD);
    var eMonth = moment(endD);

    while (sMonth <= eMonth) {
        var month = moment(sMonth).format("M");
        months.push(month);
        sMonth = moment(sMonth).add(1, "M");
        console.log(sMonth);
    }
    console.log(months);

};
returnDays(dumStartDate, dumEndDate);
returnMonths(dumStartDate, dumEndDate);












function calliNatAPI() {
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


$(document).ready(function () {
    $("#btn-submit").on("click", function (event) {
        event.preventDefault();
    });
});