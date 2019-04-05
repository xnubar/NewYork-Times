var searchInput = $("#search-input")
var inputNum = $("#input-num")
var startYear = $("#start-year")
var endYear = $("#end-year")
var btnSearch = $("#search-btn")
var btnReset = $("#reset-btn")


function load(i,response) {
    var jumbotron = $("<div>")
    $(jumbotron).addClass("jumbotron");

    var span = $("<span>")
    $(span).addClass("article-num")
    $(span).html(i + 1)

    var h4 = $("<h4>")
    $(h4).addClass("article")
    $(h4).html(response.response.docs[i].headline.main)


    var h6 = $("<h6>")
    $(h6).addClass("author")
    $(h6).html(response.response.docs[i].byline.original)

    $(jumbotron).append(span);
    $(jumbotron).append(h4)
    $(jumbotron).append(h6)

    $(".results-list").append(jumbotron);
}


var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";


$(document).on("click", ".search-btn", function (event) {
    event.preventDefault();
    let searchText;
    let start = null;
    let end = null;

    let count = parseInt($('#input-num').find(":selected").text())
    if ($(searchInput).val().length > 0) {
        searchText = $(searchInput).val()
    }
    $.ajax({
        url: queryUrl,
        method: 'GET',
        data: {
            "q": searchText,
            "api-key": "RpbbpO5GbwLCOAFaMvFkXMXehCUAMOU3"
        }
    }).done(function (response) {
        $(".results-list").empty();

        if ($(startYear).length === 4) {
            start = parseInt($(startYear).val());
        }
        if ($(endYear).length === 4) {
            end = parseInt($(endYear).val())
        }
        for (let i = 0; i < count; i++) {
            if (start != null && end != null) {
                if (start <= parseInt(response.response.docs[i].pub_date.split("-")[0]) &&
                    end > parseInt(response.response.docs[i].pub_date.split("-")[0])) {
                    load(i,response)

                }
            } else if (start == null && end != null) {
                if (end > parseInt(response.response.docs[i].pub_date.split("-")[0])) {
                    load(i,response);

                }
            }else if(start==null&&end==null){
                load(i,response);
            }
            console.log(response.response.docs.length)

        }
})
});

