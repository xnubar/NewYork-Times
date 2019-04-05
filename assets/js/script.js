var searchInput=$("#search-input")
var inputNum=$("#input-num")
var startYear=$("#start-year")
var endYear=$("#end-year")
var btnSearch=$("#search-btn")
var btnReset=$("#reset-btn")



var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
$(document).on("click","#form",function(){
    $.ajax({
        url: queryUrl,
        method: 'GET',
        data: {
            q: "europe",
            "api-key": "RpbbpO5GbwLCOAFaMvFkXMXehCUAMOU3"
        }
    }).done(function (response) {
        console.log(queryUrl)
        console.log(response);
    
    })
})

