var input = document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Test")
      checkKeyword();
    }
  });

function checkKeyword() {
    var input = document.getElementById("search-input").value.toLowerCase();
    var keywords_cheese = ["classic cheese", "classic", "cheese", "original", "cheddar"];
    var keywords_bbq = ["bangin bbq", "bangin", "bbq", "bbq sauce", "pork", "pulled pork", "smoked", "smokey"];
    var keywords_chicken = ["crispy chicken", "crispy", "chicken", "fried", "mayo"];
    var keywords_plant = ["plant powered", "plant", "vegetarian", "veg", "veggie", "healthy", "meat free"];
    var keywords_inferno = ["inferno", "hot", "spicy", "firey", "chili", "jalapeno", "chipotle"];
    var keywords_mediterranean = ["mediterranean", "greek", "lamb", "Hummus", "sweetcorn", "zucchini"];
    
    if (keywords_cheese.includes(input)) {
        window.location.href = "../SET08101/ClassicCheese.html";
    }
    else if (keywords_bbq.includes(input)) {
        window.location.href = "../SET08101/BanginBBQ.html";
    }
    else if (keywords_chicken.includes(input)) {
        window.location.href = "../SET08101/CrispyChicken.html";
    }
    else if (keywords_plant.includes(input)) {
        window.location.href = "../SET08101/PlantPowered.html";
    }
    else if (keywords_inferno.includes(input)) {
        window.location.href = "../SET08101/Inferno.html";
    }
    else if (keywords_mediterranean.includes(input)) {
        window.location.href = "../SET08101/Mediterranean.html";
    } 
    else {
        alert("No match found");
    }
}  
