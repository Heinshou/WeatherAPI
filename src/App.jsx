import LocalWeather from "./assets/components/LocalWeather"
import Weather from "./assets/components/Weather"
import { WeatherProvider } from "./assets/context/WeatherProvider"


function App() {


  return (
    <WeatherProvider>
      <header>
        <h1>Weather App</h1>
      </header>
      <LocalWeather />
      <h1 className="form__title" >Revisa el clima en otra ciudad</h1>
      <Weather />

    </WeatherProvider>

  )
}

export default App
