// Get search form and search history elements
const searchForm = document.getElementById('search-form');
const searchHistory = document.getElementById('search-history');
const weatherDisplay = document.getElementById('weather-display');

// Handle search form submission
searchForm.addEventListener('submit', event => {
  event.preventDefault();

  // Get city input value
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value;

  // Add city to search history
  const historyItem = document.createElement('li');
  historyItem.textContent = city;
  searchHistory.appendChild(historyItem);

  // Store search history in local storage
  localStorage.setItem('searchHistory', searchHistory.innerHTML);

  // Clear city input
  cityInput.value = '';

  // Get current date

  // Make request to openweathermap API to get weather data for city
  fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=e549dd775c23bdc77d9bde0765c7323e`)
    .then(response => response.json())
    .then(data => {
      // Display city name
      const cityName = document.getElementById('city-name');
      cityName.textContent = data.name;

      // Display date
      
      // Display weather icon
      
    })
    .catch(error => {
      console.error(error);
    });
});

// Load search history from local storage
const storedHistory = localStorage.getItem('searchHistory');
if (storedHistory) {
}