// jQuery plugin for the date range found here "http://www.daterangepicker.com/"
$('input[name="dates"]').daterangepicker();

$(function() {
    $('input[name="daterange"').daterangepicker({
        opens: 'left'
    }, function(start, end, label) {
        console.log("Date ranger selected by user was from: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});
