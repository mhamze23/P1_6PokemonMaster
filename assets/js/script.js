$(function () {
  var pokemonInput = $("#pokemon-input");
  var formEl = $("#form");
  var pokeName1 = $("#pokeName1")[0];
  var pokeName2 = $("#pokeName2")[0];
  var pokemonType1 = $("#pokeType1")[0];
  var pokemonType2 = $("#pokeType2")[0];

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
    //alert("form is submitted")//

    // this will be altered to our counter pokemon name when that var is created
    // still need poke api logic to get that variable/value
    // currently links to the inputted pokemon name, not counter pokemon name like the final product
    var search = pokemonInput.val().split(" ")[0].trim().toLowerCase()
    console.log(search)

    // videoSearch config
    videoSearch(apiKey, search, 1)
    //document.querySelector("#search").addEventListener("click", getPokemon);//


    function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + search)
      .then((response) => response.json())
      .then((data) => {

        var pokemonName1 = data.name;
        var pokemonType1 = data.types[0].type.name;

        var pokemonName1Text = pokemonName1.toUpperCase();
        var pokemonType1Text = pokemonType1.toUpperCase();

        pokeName1.innerHTML = pokemonName1Text;
        pokeType1.innerHTML = pokemonType1Text

        $("#pokeImage1")[0].src = "./assets/images/" + pokemonType1 + "/" + pokemonName1 + ".png";

        if (pokemonType1 === "electric" || pokemonType1 === "poison") {

          var image_array = ["cubone.png", "diglett.png", "dugtrio.png", "marowak.png", "rhydon.png", "rhyhorn.png", "sandshrew.png", "sandslash.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/ground/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "ground".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        } else if (pokemonType1 === "rock" || pokemonType1 === "fire") {

          var image_array = ["blastoise.png", "cloyster.png", "goldeen.png", "golduck.png", "gyarados.png", "horsea.png", "kingsler.png", "krabby.png", "lapras.png", "magikarp.png", "poliwag.png", "poliwhirl.png", "poliwrath.png", "psyduck.png", "seadra.png", "seaking.png", "seel.png", "shellder.png", "slowbro.png", "slowpoke.png", "squirtle.png", "starmie.png", "staryu.png", "tentacool.png", "tentacruel.png", "vaporeon.png", "wartortle.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/water/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "water".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        } else if (pokemonType1 === "water") {
            
          var image_array = ["electrobuzz.png", "electrode.png", "jolteon.png", "magnemite.png", "magneton.png", "pikachu.png", "raichu.png", "voltorb.png", "zapdos.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/electric/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "electric".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        } else if (pokemonType1 === "grass" || pokemonType1 === "ice") {
            
          var image_array = ["arcanine.png", "charizard.png", "charmander.png", "charmeleon.png", "flareon.png", "growlithe.png", "magmar.png", "moltres.png", "ninetales.png", "ponyta.png", "rapidash.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/fire/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "fire".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        } else if (pokemonType1 === "normal") {
            
          var image_array = ["hitmonchan.png", "hitmonlee.png", "machoke.png", "machop.png", "mankey.png", "primeape.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/fighting/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "fighting".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        } else if (pokemonType1 === "fighting") {
          
          var image_array = ["abra.png", "alakazam.png", "drowzee.png", "hypno.png", "kadabra.png", "mew.png", "mewtwo.png", "mr-mime.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/psychic/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "psychic".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        } else if (pokemonType1 === "psychic" || pokemonType1 === "ghost") {

          var image_array = ["gastly.png", "gengar.png", "haunter.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/ghost/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "ghost".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        } else if (pokemonType1 === "dragon") {
            
          var image_array = ["clefable.png", "clefairy.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/fairy/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "fairy".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        } else if (pokemonType1 === "fairy") {
            
          var image_array = ["arbok.png", "ekans.png", "golbat.png", "grimer.png", "koffing.png", "muk.png", "nidoking.png", "nidoqueen.png", "nidoran-f.png", "nidoran-m.png", "nidorina.png", "nidorino.png", "weezing.png", "zubat.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/poison/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "poison".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        } else if (pokemonType1 === "ground") {
            
          var image_array = ["beedrill.png", "butterfree.png", "caterpie.png", "kakuna.png", "metapod.png", "paras.png", "parasect.png", "pinsir.png", "scyther.png", "venomoth.png", "venonat.png", "weedle.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/bug/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "bug".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;
        
        } else if (pokemonType1 === "bug") {
            
          var image_array = ["aerodactyl.jpg", "geodude.png", "golem.png", "graveler.png", "kabuto.png", "kabutops.png", "omanyte.png", "omastar.png", "onix.png"];
          var random_index = Math.floor(Math.random() * image_array.length);
          var selected_image = image_array[random_index];
          $("#pokeImage2")[0].src = "./assets/images/rock/" + selected_image;
          var pokemonName2Text = selected_image.substring(0, selected_image.lastIndexOf('.')).toUpperCase()
          pokeName2.innerHTML = pokemonName2Text;
          pokemonType2.innerHTML = pokemonName1Text + " is weak against " + "rock".toUpperCase() + "-TYPE pokemons like " + pokemonName2Text;

        }
      }).catch((err) => {
          console.log("Pokemon not found", err)
      })
    }
    
    getPokemon()
  })

  function videoSearch(apiKey, search, maxResults) {
    // dynamically generated URL inputting the API key, max results value (one for now) and
    // the search value (what pokemon was inputted) along with "first appearance in show" for video specificity
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + apiKey + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search + "pokemon+first+appearance+in+anime", function (data) {
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
