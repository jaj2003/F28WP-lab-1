//API key 
const apiKey = '6e26f9f1fa1346f7e61fdd6c2fb353ba';

//Variables to store references to your input field, button, and weather info div.
const cityInput = document.getElementById('cityInput');
const btn = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

//Event listener to the button to detect when it is clicked.
btn.addEventListener('click', () => {
  //Gets the value of the input field.
  const city = cityInput.value.trim();

  if (city === '') {
    // If the city input is empty.
    alert('Please enter a city name.');
  } else {
    //HTTP request to the OpenWeatherMap API to fetch the weather data.
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then((response) => {
      if (!response.ok) {
        //Error handling
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      
      return response.json();
    })
        .then((data) => {
          //Parses the data and updates the weather info div with details.
          const weatherDescription = data.weather[0].description;
          const temperature = data.main.temp;
          const windSpeed = data.wind.speed;

          const weatherHTML =
            `<h2>Weather in ${city}:</h2>
          <p>Weather: ${weatherDescription}</p>
          <p>Temperature: ${temperature}°C</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
        `;

          weatherInfo.innerHTML = weatherHTML;
        })
        .catch((error) => {
          //Error handling
          alert('An error occurred while fetching weather data. Please try again later.');
          console.error(error);
        });
  }
});