
// I want to be able to put "dog" in the input field and have my story appear
// after I press the submit button with "dog" in the animal blank.

// querySelector all will select all "Animal" class 

// Make a variable for the animal
const animalSpans = document.querySelectorAll(".animal");
const animalInput = document.querySelector("#animal");

// country
const countrySpans = document.querySelectorAll(".country");
const countryInput = document.querySelector("#country");

// pluralNoun
const pluralNounSpans = document.querySelectorAll(".pluralNoun");
const pluralNounInput = document.querySelector("#pluralNoun");

// food
const foodSpans = document.querySelectorAll(".food");
const foodInput = document.querySelector("#food");

// noun
const nounSpans = document.querySelectorAll(".noun");
const nounInput = document.querySelector("#noun");

// device
const deviceSpans = document.querySelectorAll(".device");
const deviceInput = document.querySelector("#device");

// adjective
const adjectiveSpans = document.querySelectorAll(".adjective");
const adjectiveInput = document.querySelector("#adjective");


// form and story
const form = document.getElementById("madLibForm");
let story = document.getElementById("madLibStory");


//repeat function 
function assignValue(inputArray, value) {
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i].innerText = value;
    }
}


// EventListener listens for click
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Repeated words
    assignValue(animalSpans, animalInput.value);
    assignValue(countrySpans, countryInput.value);
    assignValue(pluralNounSpans, pluralNounInput.value);
    assignValue(deviceSpans, deviceInput.value);
    assignValue(foodSpans, foodInput.value);
    assignValue(adjectiveSpans, adjectiveInput.value);
    assignValue(nounSpans, nounInput.value);
    

    // Original individual loops 
    // for (let i = 0; i < countrySpan.length; i++) {
    //     countrySpan[i].innerText = countryInput.value;
    // }
    // for (let i = 0; i < deviceSpan.length; i++) {
    //     deviceSpan[i].innerText = deviceInput.value;
    // }
    // for (let i = 0; i < adjectiveSpan.length; i++) {
    //     adjectiveSpan[i].innerText = adjectiveInput.value;
    // }




    // display the whole story
    story.style.display = "block";
})


for (let i = 0; i < countrySpan.length; i++) {
    countrySpan[i].innerText = countryInput.value;
}
