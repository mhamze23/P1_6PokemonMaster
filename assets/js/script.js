$(document).foundation();

$(function () {
  var availableTags = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran-f",
    "Nidorina",
    "Nidoqueen",
    "Nidoran-m",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Diglett",
    "Dugtrio",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machop",
    "Machoke",
    "Machamp",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Tentacool",
    "Tentacruel",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Slowpoke",
    "Slowbro",
    "Magnemite",
    "Magneton",
    "Farfetch’d",
    "Doduo",
    "Dodrio",
    "Seel",
    "Dewgong",
    "Grimer",
    "Muk",
    "Shellder",
    "Cloyster",
    "Gastly",
    "Haunter",
    "Gengar",
    "Onix",
    "Drowzee",
    "Hypno",
    "Krabby",
    "Kingler",
    "Voltorb",
    "Electrode",
    "Exeggcute",
    "Exeggutor",
    "Cubone",
    "Marowak",
    "Hitmonlee",
    "Hitmonchan",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Rhyhorn",
    "Rhydon",
    "Chansey",
    "Tangela",
    "Kangaskhan",
    "Horsea",
    "Seadra",
    "Goldeen",
    "Seaking",
    "Staryu",
    "Starmie",
    "Mr. Mime",
    "Scyther",
    "Jynx",
    "Electabuzz",
    "Magmar",
    "Pinsir",
    "Tauros",
    "Magikarp",
    "Gyarados",
    "Lapras",
    "Ditto",
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Porygon",
    "Omanyte",
    "Omastar",
    "Kabuto",
    "Kabutops",
    "Aerodactyl",
    "Snorlax",
    "Articuno",
    "Zapdos",
    "Moltres",
    "Dratini",
    "Dragonair",
    "Dragonite",
    "Mewtwo",
    "Mew",
  ];
  $("#pokemon-input").autocomplete({
    source: availableTags,
    minLength: 2,
  });
});

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
      "pokemon+first+appearance+in+anime", function (data) {
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
          // #video class location will be where the iframe is appended 
          $("#videos").append(video)

        });
      })
  }
})