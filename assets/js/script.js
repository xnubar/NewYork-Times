

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