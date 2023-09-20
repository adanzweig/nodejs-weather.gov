
async function getCurrentWeather(prompt,message){
    const url = 'https://api.weather.gov/points/32.8419349,-116.7770013';
    try{
        const gridFetch = await fetch(url);
        const gridData = await gridFetch.json();
        const forecastUrl =  gridData.properties.forecast;

        const forecast = await fetch(forecastUrl);
        const forecastData = await forecast.json();
        
        //Current weather        
        return forecastData.properties.periods[0];
    }catch(error){
        console.error('Error:',error);
    }
}

Promise.resolve(getCurrentWeather()).then(
    body=> console.log(body)
)