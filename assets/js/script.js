$(function () {

  var pokemonInput = $("#pokemon-input");
  var formEl = $("#form");

  var availableTags = {
    "Bulbasaur": null,
    "Ivysaur": null,
    "Venusaur": null,
    "Charmander": null,
    "Charmeleon": null,
    "Charizard": null,
    "Squirtle": null,
    "Wartortle": null,
    "Blastoise": null,
    "Caterpie": null,
    "Metapod": null,
    "Butterfree": null,
    "Weedle": null,
    "Kakuna": null,
    "Beedrill": null,
    "Pidgey": null,
    "Pidgeotto": null,
    "Pidgeot": null,
    "Rattata": null,
    "Raticate": null,
    "Spearow": null,
    "Fearow": null,
    "Ekans": null,
    "Arbok": null,
    "Pikachu": null,
    "Raichu": null,
    "Sandshrew": null,
    "Sandslash": null,
    "Nidoran-f": null,
    "Nidorina": null,
    "Nidoqueen": null,
    "Nidoran-m": null,
    "Nidorino": null,
    "Nidoking": null,
    "Clefairy": null,
    "Clefable": null,
    "Vulpix": null,
    "Ninetales": null,
    "Jigglypuff": null,
    "Wigglytuff": null,
    "Zubat": null,
    "Golbat": null,
    "Oddish": null,
    "Gloom": null,
    "Vileplume": null,
    "Paras": null,
    "Parasect": null,
    "Venonat": null,
    "Venomoth": null,
    "Diglett": null,
    "Dugtrio": null,
    "Meowth": null,
    "Persian": null,
    "Psyduck": null,
    "Golduck": null,
    "Mankey": null,
    "Primeape": null,
    "Growlithe": null,
    "Arcanine": null,
    "Poliwag": null,
    "Poliwhirl": null,
    "Poliwrath": null,
    "Abra": null,
    "Kadabra": null,
    "Alakazam": null,
    "Machop": null,
    "Machoke": null,
    "Machamp": null,
    "Bellsprout": null,
    "Weepinbell": null,
    "Victreebel": null,
    "Tentacool": null,
    "Tentacruel": null,
    "Geodude": null,
    "Graveler": null,
    "Golem": null,
    "Ponyta": null,
    "Rapidash": null,
    "Slowpoke": null,
    "Slowbro": null,
    "Magnemite": null,
    "Magneton": null,
    "Farfetch’d": null,
    "Doduo": null,
    "Dodrio": null,
    "Seel": null,
    "Dewgong": null,
    "Grimer": null,
    "Muk": null,
    "Shellder": null,
    "Cloyster": null,
    "Gastly": null,
    "Haunter": null,
    "Gengar": null,
    "Onix": null,
    "Drowzee": null,
    "Hypno": null,
    "Krabby": null,
    "Kingler": null,
    "Voltorb": null,
    "Electrode": null,
    "Exeggcute": null,
    "Exeggutor": null,
    "Cubone": null,
    "Marowak": null,
    "Hitmonlee": null,
    "Hitmonchan": null,
    "Lickitung": null,
    "Koffing": null,
    "Weezing": null,
    "Rhyhorn": null,
    "Rhydon": null,
    "Chansey": null,
    "Tangela": null,
    "Kangaskhan": null,
    "Horsea": null,
    "Seadra": null,
    "Goldeen": null,
    "Seaking": null,
    "Staryu": null,
    "Starmie": null,
    "Mr. Mime": null,
    "Scyther": null,
    "Jynx": null,
    "Electabuzz": null,
    "Magmar": null,
    "Pinsir": null,
    "Tauros": null,
    "Magikarp": null,
    "Gyarados": null,
    "Lapras": null,
    "Ditto": null,
    "Eevee": null,
    "Vaporeon": null,
    "Jolteon": null,
    "Flareon": null,
    "Porygon": null,
    "Omanyte": null,
    "Omastar": null,
    "Kabuto": null,
    "Kabutops": null,
    "Aerodactyl": null,
    "Snorlax": null,
    "Articuno": null,
    "Zapdos": null,
    "Moltres": null,
    "Dratini": null,
    "Dragonair": null,
    "Dragonite": null,
    "Mewtwo": null,
    "Mew": null,
  };

  // Input Autocomplete Feature
  pokemonInput.autocomplete({
    data: availableTags,
    minLength: 3,
  });

  // api key
  var apiKey = "AIzaSyDpIsEfsOATGMkGETPLfcEFxlNejI9U-5s";
  // video is an empty string to start, will be generated
  var video = '';

  // submit event listener
  formEl.submit(function (event) {
    event.preventDefault()
    // for debugging purposes, confirms a form is submitted
    alert("form is submitted")

    // this will be altered to our counter pokemon name when that var is created
    // still need poke api logic to get that variable/value
    // currently links to the inputted pokemon name, not counter pokemon name like the final product
    var search = pokemonInput.val().split(" ")[0].trim()

    // videoSearch config
    videoSearch(apiKey, search, 1)
  })

  function videoSearch(apiKey, search, maxResults) {
    // dynamically generated URL inputting the API key, max results value (one for now) and
    // the search value (what pokemon was inputted) along with "first appearance in show" for video specificity
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search + "first+appearance+in+anime", function (data) {
        console.log(data)

        // this appends the video (in iframe format) to the div with the id=videos
        // at a later date this could be added to a modal?
        // this method between the back ticks allows us to enter HTML into the JS
        // this is a quick and dirty way, may be altered in the future
        // the location of the video being display is WIP
        data.items.forEach(item => {
          video = `<iframe width="1280" height="720" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>          `
          // #video class location will be where the iframe is appended 
          $("#videos").append(video)

        });
      })
    }
  });
