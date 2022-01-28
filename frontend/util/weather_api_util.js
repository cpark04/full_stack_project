export const fetchWeather = (lat, long) => {
    return $.ajax({
        method:"GET",
        url: `https://api.weatherapi.com/v1/forecast.json?key=${window.weather}&q=${lat},${long}&days=6&aqi=no&alerts=no`
    })
}
