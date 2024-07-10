let search = document.getElementById("search-btn");
let country = document.getElementById("country-inp");

search.addEventListener("click", () => {

  let countryName = country.value;
  
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;


  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital  : </h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent  : </h4>
                <span>${data[0].continents[0]}</span>
            </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency   : </h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population   : </h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages   : </h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
    })

    // ERROR HANDLING :: INCASE OF MISSING CREDENTIALS OR INVALID DATA

    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});
