$(document).foundation();

$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );

$(document).ready(function () {
    // api key
    var apiKey = "AIzaSyDpIsEfsOATGMkGETPLfcEFxlNejI9U-5s"
    // video is an empty string to start, will be generated
    var video = ''

    // submit event listener
    $("#form").submit(function (event) {
        event.preventDefault()
        // for debugging purposes, confirms a form is submitted
        alert("form is submitted")

        // this will be altered to our counter pokemon name when that var is created
        // still need poke api logic to get that variable/value
        // currently links to the inputted pokemon name, not counter pokemon name like the final product
        var search = $("#pokemon-input").val().split(" ")[0].trim()

        // videoSearch config
        videoSearch(apiKey, search, 1)
    })

    function videoSearch(apiKey, search, maxResults) {
        // dynamically generated URL inputting the API key, max results value (one for now) and
        // the search value (what pokemon was inputted) along with "first appearance in show" for video specificity
        $.get("https://www.googleapis.com/youtube/v3/search?key=" +
            apiKey +
            "&type=video&part=snippet&maxResults=" +
            maxResults +
            "&q=" +
            search +
            "first+appearance+in+anime", function (data) {
                console.log(data)

                // this appends the video (in iframe format) to the div with the id=videos
                // at a later date this could be added to a modal?
                // this method between the back ticks allows us to enter HTML into the JS
                // this is a quick and dirty way, may be altered in the future
                // the location of the video being display is WIP
                data.items.forEach(item => {
                    video = `
                    <iframe width="1280" height="720" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                    `
                    $("#video").append(video)

                });
            })
    }
})