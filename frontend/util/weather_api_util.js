export const fetchWeather = (lat, long) => {
    return $.ajax({
        method:"GET",
        url: `http://api.weatherapi.com/v1/forecast.json?key=26f26fa7dad24e648e761346222801&q=${lat},${long}&days=6&aqi=no&alerts=no`
    })
}
