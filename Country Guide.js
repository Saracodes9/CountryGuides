let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value.trim(); // Trim input to avoid unnecessary spaces
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      // Check if the response contains the data
      if (data && data.length > 0) {
        let countryData = data[0]; // Get the first match

        result.innerHTML = `
          <img src="${countryData.flags.svg}" class="flag-img" alt="Flag of ${countryData.name.common}">
          <h2>${countryData.name.common}</h2>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Capital:</h4>
                  <span>${countryData.capital ? countryData.capital[0] : "N/A"}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Region:</h4>
                  <span>${countryData.region}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Subregion:</h4>
                  <span>${countryData.subregion}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Continent:</h4>
                  <span>${countryData.continents ? countryData.continents[0] : "N/A"}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Population:</h4>
                  <span>${countryData.population.toLocaleString()}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Currency:</h4>
                  <span>${countryData.currencies ? countryData.currencies[Object.keys(countryData.currencies)[0]].name : "N/A"} - ${Object.keys(countryData.currencies)[0]}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Timezones:</h4>
                  <span>${countryData.timezones.join(", ")}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Top-Level Domain:</h4>
                  <span>${countryData.tld.join(", ")}</span>
              </div>
          </div>
          <div class="wrapper">
              <div class="data-wrapper">
                  <h4>Common Languages:</h4>
                  <span>${Object.values(countryData.languages).join(", ")}</span>
              </div>
          </div>
        `;
      } else {
        result.innerHTML = `<h3>No data found. Please enter a valid country name.</h3>`;
      }
    })
    .catch(() => {
      if (countryName.length === 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});
