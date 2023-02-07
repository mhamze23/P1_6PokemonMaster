$(function () {

  localStorage.clear();

  var pokemonInput = $("#pokemon-input");
  var formEl = $("#form");
  var pokeName1 = $("#pokeName1")[0];
  var pokeName2 = $("#pokeName2")[0];
  var pokemonType2 = $("#pokeType2")[0];
  var weaknessListEl = $("#weaknessList");
  var pokemonBtns = $("#pokemonBtns");
  var history = $("#history");

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

    // getting stuff from local storage for pokemon
  var pokemonStorage = localStorage.getItem("pokemon");

    // create or add to an array
  if (pokemonStorage) {
    pokemonStorage = JSON.parse(pokemonStorage)
  } else {
    pokemonStorage = [];
  }
  
  // create a button if city name exists using the function findCoordinates
  pokemonStorage.forEach(createBtn);

  // create buttons for the existing cities
  function createBtn(pokemon) {
    var btn = $("<button>", {
      text: pokemon
    });
      
    btn.addClass("btn ");
    pokemonBtns.prepend(btn);
  }

  // Input Autocomplete Feature
  pokemonInput.autocomplete({
    data: availableTags,
    minLength: 3,
  });

  // api key
  var apiKey = "AIzaSyAaVfO_wyq9c3hNxgESz04Z_kqAQnoVSCg";
  // video is an empty string to start, will be generated
  var video = '';

  // submit event listener
  formEl.submit(function (event) {
    event.preventDefault()
    var search = pokemonInput.val().split(" ")[0].trim().toLowerCase()

    // for debugging purposes, confirms a form is submitted
    //alert("form is submitted")//

    // this will be altered to our counter pokemon name when that var is created
    // still need poke api logic to get that variable/value
    // currently links to the inputted pokemon name, not counter pokemon name like the final product

    // videoSearch config
    // videoSearch(apiKey, search, 1)

    function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + search)
      .then((response) => response.json())
      .then((data) => {

        var pokemonName1 = data.name;
        var pokemonType1 = data.types[0].type.name;
        
        var pokemonName1Text = pokemonName1.toUpperCase();
        var pokemonType1Text = "Type: " + pokemonType1.toUpperCase();
        $("#pokeImage1")[0].src = "./assets/images/" + pokemonType1 + "/" + pokemonName1 + ".png";

        if (pokemonName1Text && pokemonStorage.includes(pokemonName1Text) === false) {
          createBtn(pokemonName1Text);
          pokemonStorage.push(pokemonName1Text);
          localStorage.setItem("pokemon", JSON.stringify(pokemonStorage));
        }

        pokeName1.innerHTML = pokemonName1Text;
        pokeType1.innerHTML = pokemonType1Text

        findWeakness(pokemonType1);
      });
    };
    getPokemon();
  });
  
  function findWeakness(pokemonType1) {
    fetch('https://pokeapi.co/api/v2/type/' + pokemonType1)
    .then((response) => response.json())
    .then((data) => {
      
    var waterImages = ["blastoise.png", "cloyster.png", "goldeen.png", "golduck.png", "gyarados.png", "horsea.png", "kingler.png", "krabby.png", "lapras.png", "magikarp.png", "poliwag.png", "poliwhirl.png", "poliwrath.png", "psyduck.png", "seadra.png", "seaking.png", "seel.png", "shellder.png", "slowbro.png", "slowpoke.png", "squirtle.png", "starmie.png", "staryu.png", "tentacool.png", "tentacruel.png", "vaporeon.png", "wartortle.png"];
    var grassImages = ["bellsprout.png", "bulbasaur.png", "exeggcute.png", "exeggutor.png", "gloom.png", "ivysaur.png", "oddish.png", "tangela.png", "venusaur.png", "victreebel.png", "vileplume.png", "weepinbell.png"];
    var electricImages = ["electabuzz.png", "electrode.png", "jolteon.png", "magnemite.png", "magneton.png", "pikachu.png", "raichu.png", "voltorb.png", "zapdos.png"];
    var poisonImages = ["arbok.png", "ekans.png", "golbat.png", "grimer.png", "koffing.png", "muk.png", "nidoking.png", "nidoqueen.png", "nidoran-f.png", "nidoran-m.png", "nidorina.png", "nidorino.png", "weezing.png", "zubat.png"];
    var bugImages = ["beedrill.png", "butterfree.png", "caterpie.png", "kakuna.png", "metapod.png", "paras.png", "parasect.png", "pinsir.png", "scyther.png", "venomoth.png", "venonat.png", "weedle.png"];
    var ghostImages = ["gastly.png", "gengar.png", "haunter.png"];
    var psychicImages = ["abra.png", "alakazam.png", "drowzee.png", "hypno.png", "kadabra.png", "mew.png", "mewtwo.png", "mr-mime.png"];
    var iceImages = ["articuno.png", "dewgong.png", "jynx.png"];
    var dragonImages = ["dragonair.png", "dragonite.png", "dratini.png"];
    var fairyImages = ["clefable.png", "clefairy.png"];
    var groundImages = ["cubone.png", "diglett.png", "dugtrio.png", "marowak.png", "rhydon.png", "rhyhorn.png", "sandshrew.png", "sandslash.png"];
    var fightingImages = ["hitmonchan.png", "hitmonlee.png", "machoke.png", "machop.png", "mankey.png", "primeape.png"];
    var rockImages = ["aerodactyl.png", "geodude.png", "golem.png", "graveler.png", "kabuto.png", "kabutops.png", "omanyte.png", "omastar.png", "onix.png"];
    var fireImages = ["arcanine.png", "charizard.png", "charmander.png", "charmeleon.png", "flareon.png", "growlithe.png", "magmar.png", "moltres.png", "ninetales.png", "ponyta.png", "rapidash.png"];

    var weaknessTypeLength = data.damage_relations.double_damage_from.length
    var weaknessType = [];

    for (var i = 0; i <= weaknessTypeLength - 1; i++) {
      weaknessType[i] = data.damage_relations.double_damage_from[i].name;
    }

    var weaknessIndex = Math.floor(Math.random() * weaknessType.length);

    if (pokemonType1 === "electric") {

        var random_index = Math.floor(Math.random() * groundImages.length);
        var selected_image = groundImages[random_index];

    } else if (pokemonType1 === "ground") {

        if (weaknessType[weaknessIndex] === "water") {

          var random_index = Math.floor(Math.random() * waterImages.length);
          var selected_image = waterImages[random_index];

        } else if (weaknessType[weaknessIndex] === "grass") {

          var random_index = Math.floor(Math.random() * grassImages.length);
          var selected_image = grassImages[random_index];

        } else if (weaknessType[weaknessIndex] === "ice") {

          var random_index = Math.floor(Math.random() * iceImages.length);
          var selected_image = iceImages[random_index];
          
        }

      } else if (pokemonType1 === "water") {

        if (weaknessType[weaknessIndex] === "grass") {

          var random_index = Math.floor(Math.random() * grassImages.length);
          var selected_image = grassImages[random_index];

        } else if (weaknessType[weaknessIndex] === "electric") {

          var random_index = Math.floor(Math.random() * electricImages.length);
          var selected_image = electricImages[random_index];

        }
        
      } else if (pokemonType1 === "grass") {

        weaknessType.splice(0, 1);
        weaknessIndex = Math.floor(Math.random() * weaknessType.length);

        if (weaknessType[weaknessIndex] === "poison") {

          var random_index = Math.floor(Math.random() * poisonImages.length);
          var selected_image = poisonImages[random_index];
          
        } else if (weaknessType[weaknessIndex] === "bug") {

          var random_index = Math.floor(Math.random() * bugImages.length);
          var selected_image = bugImages[random_index];

        } else if (weaknessType[weaknessIndex] === "fire") {

          var random_index = Math.floor(Math.random() * fireImages.length);
          var selected_image = fireImages[random_index];

        } else if (weaknessType[weaknessIndex] === "ice") {
         
          var random_index = Math.floor(Math.random() * iceImages.length);
          var selected_image = iceImages[random_index];

        }

      } else if (pokemonType1 === "poison") {

        if (weaknessType[weaknessIndex] === "ground") {

          var random_index = Math.floor(Math.random() * groundImages.length);
          var selected_image = groundImages[random_index];

        } else if (weaknessType[weaknessIndex] === "psychic") {

          var random_index = Math.floor(Math.random() * psychicImages.length);
          var selected_image = psychicImages[random_index];

        }
        
      } else if (pokemonType1 === "psychic") {

        weaknessType.splice(2, 1);
        weaknessIndex = Math.floor(Math.random() * weaknessType.length);

        if (weaknessType[weaknessIndex] === "bug") {

          var random_index = Math.floor(Math.random() * bugImages.length);
          var selected_image = bugImages[random_index];

        } else if (weaknessType[weaknessIndex] === "ghost") {

          var random_index = Math.floor(Math.random() * ghostImages.length);
          var selected_image = ghostImages[random_index];

        }

      } else if (pokemonType1 === "bug") {

        weaknessType.splice(0, 1);
        weaknessIndex = Math.floor(Math.random() * weaknessType.length);

        if (weaknessType[weaknessIndex] === "rock") {

          var random_index = Math.floor(Math.random() * rockImages.length);
          var selected_image = rockImages[random_index];


        } else if (weaknessType[weaknessIndex] === "fire") {

          var random_index = Math.floor(Math.random() * fireImages.length);
          var selected_image = fireImages[random_index];

        }

      } else if (pokemonType1 === "rock") {

        weaknessType.splice(2,1);
        weaknessIndex = Math.floor(Math.random() * weaknessType.length);

        if (weaknessType[weaknessIndex] === "ground") {

          var random_index = Math.floor(Math.random() * groundImages.length);
          var selected_image = groundImages[random_index];

        } else if (weaknessType[weaknessIndex] === "fighting") {

          var random_index = Math.floor(Math.random() * fightingImages.length);
          var selected_image = fightingImages[random_index];

        } else if (weaknessType[weaknessIndex] === "water") {

          var random_index = Math.floor(Math.random() * waterImages.length);
          var selected_image = waterImages[random_index];

        } else if (weaknessType[weaknessIndex] === "grass") {

        var random_index = Math.floor(Math.random() * grassImages.length);
        var selected_image = grassImages[random_index];

      }

    } else if (pokemonType1 === "fighting") {

      weaknessType.splice(0, 1);
      weaknessIndex = Math.floor(Math.random() * weaknessType.length);

      if (weaknessType[weaknessIndex] === "psychic") {

        var random_index = Math.floor(Math.random() * psychicImages.length);
        var selected_image = psychicImages[random_index];
      
      } else if (weaknessType[weaknessIndex] === "fairy") {

        var random_index = Math.floor(Math.random() * fairyImages.length);
        var selected_image = fairyImages[random_index];

      }

    } else if (pokemonType1 === "fairy") {

      weaknessType.splice(1, 1);
      weaknessIndex = Math.floor(Math.random() * weaknessType.length);

      random_index = Math.floor(Math.random() * poisonImages.length);
      var selected_image = poisonImages[random_index];

    } else if (pokemonType1 === "normal") {

      var random_index = Math.floor(Math.random() * fightingImages.length);
      var selected_image = fightingImages[random_index];

    } else if (pokemonType1 === "dragon") {

      if (weaknessType[weaknessIndex] === "ice") {
         
        var random_index = Math.floor(Math.random() * iceImages.length);
        var selected_image = iceImages[random_index];

      } else if (weaknessType[weaknessIndex] === "dragon") {

        var random_index = Math.floor(Math.random() * dragonImages.length);
        var selected_image = dragonImages[random_index];

      } else if (weaknessType[weaknessIndex] === "fairy") {

        var random_index = Math.floor(Math.random() * fairyImages.length);
        var selected_image = fairyImages[random_index];

      }

    } else if (pokemonType1 === "fire") {

      if (weaknessType[weaknessIndex] === "ground") {

        var random_index = Math.floor(Math.random() * groundImages.length);
        var selected_image = groundImages[random_index];

      } else if (weaknessType[weaknessIndex] === "rock") {

        var random_index = Math.floor(Math.random() * rockImages.length);
        var selected_image = rockImages[random_index];

      } else if (weaknessType[weaknessIndex] === "water") {

        var random_index = Math.floor(Math.random() * waterImages.length);
        var selected_image = waterImages[random_index];

      }

    } else if (pokemonType1 === "ghost") {

      weaknessType.splice(1,1);
      weaknessIndex = Math.floor(Math.random() * weaknessType.length);

      var random_index = Math.floor(Math.random() * ghostImages.length);
      var selected_image = ghostImages[random_index];

    } else if (pokemonType1 === "ice") {

      weaknessType.splice(2, 1);
      weaknessIndex = Math.floor(Math.random() * weaknessType.length);

      if (weaknessType[weaknessIndex] === "fighting") {

        var random_index = Math.floor(Math.random() * fightingImages.length);
        var selected_image = fightingImages[random_index];

      } else if (weaknessType[weaknessIndex] === "rock") {

        var random_index = Math.floor(Math.random() * rockImages.length);
        var selected_image = rockImages[random_index];

      } else if (weaknessType[weaknessIndex] === "fire") {

        var random_index = Math.floor(Math.random() * fireImages.length);
        var selected_image = fireImages[random_index];

      }
    }

    $("#pokeImage2")[0].src = "./assets/images/" + weaknessType[weaknessIndex] + "/" + selected_image;
    $("#shout")[0].innerHTML = "THEN I CHOOSE YOU, "
    var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase();
    pokeName2.innerHTML = pokemonName2Text + "!";
    pokemonType2.innerHTML = "Type: " + weaknessType[weaknessIndex].toUpperCase();

    if (pokemonName2Text && pokemonStorage.includes(pokemonName2Text) === false) {
      createBtn(pokemonName2Text);
      pokemonStorage.push(pokemonName2Text);
      localStorage.setItem("pokemon", JSON.stringify(pokemonStorage));
    }

    emptyList(weaknessListEl);
    listWeakness(weaknessListEl, weaknessType);
    videoSearch(apiKey, pokemonName2Text, 1);
    $(".video-container")[0].setAttribute("style", "display: block")
    });
  };
  
  function listWeakness(list, items) {
    for (var i = 0; i < items.length; i++) {
      list.append('<li>' + items[i].toUpperCase() + '</li>');;
    }
  }

  function emptyList(list) {
    list.empty();
  }

  // click event to search the same city again if button are created already
  history.on('click', searchAgain)

  // function to search the city with its own button
  function searchAgain(event) {
    event.preventDefault();
    var apiKey = "AIzaSyAaVfO_wyq9c3hNxgESz04Z_kqAQnoVSCg";
    videoSearch(apiKey, event.target.innerHTML, 1)
  }

  function videoSearch(apiKey, search, maxResults) {
    // dynamically generated URL inputting the API key, max results value (one for now) and
    // the search value (what pokemon was inputted) along with "first appearance in show" for video specificity
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search + "pokemon+first+appearance+in+anime", function (data) {

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

