# Node.js Weather.gov Connection

This Node.js project demonstrates how to connect to the weather.gov API to fetch the current weather information for a specific geographical location using the `fetch` API. In this project, we provide a simple `index.js` file that fetches and displays the current weather data for a predefined location.

## Prerequisites

Before running this project, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (at least Node.js 12 or higher)

## Installation

1. Clone or download this repository to your local machine.

```bash
git clone https://github.com/adanzweig/nodejs-weather.gov.git
```

2. Navigate to the project directory.

```bash
cd nodejs-weather.gov
```

3. Install project dependencies using npm.

```bash
npm install
```

## Usage

To fetch and display the current weather information, follow these steps:

1. Open the `index.js` file in your code editor.

2. In the `getCurrentWeather` function, modify the latitude and longitude coordinates in the `url` variable to specify the location for which you want to fetch weather data. You can find the appropriate coordinates on the [weather.gov website](https://www.weather.gov/).

```javascript
const url = 'https://api.weather.gov/points/32.8419349,-116.7770013';
```

3. Save your changes.

4. Run the project using Node.js:

```bash
node index.js
```

5. The current weather information for the specified location will be displayed in the console.

## Example

Here's an example of what the output might look like in the console:

```plaintext
{
  name: 'Today',
  startTime: '2023-09-20T12:00:00-07:00',
  endTime: '2023-09-21T00:00:00-07:00',
  temperature: 75,
  temperatureUnit: 'Fahrenheit',
  windSpeed: '5 to 10 mph',
  windDirection: 'Northwest',
  shortForecast: 'Sunny',
  detailedForecast: 'Sunny, with a high near 75. Northwest wind 5 to 10 mph.'
}
```

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Weather data is provided by the [National Weather Service](https://www.weather.gov/).
- This project uses the `fetch` API to make HTTP requests.

If you have any questions or encounter issues, please don't hesitate to reach out.

Happy coding!