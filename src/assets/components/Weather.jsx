import Form from "./Form"
import Result from './Result'
import Loading from './Loading'
import useWeather from "../Hooks/useWeather"

const WeatherApp = () => {

    const {result, loading, noResult} = useWeather()

  return (
    <>
        <main className='dos-columnas'>
            <Form/>
            {
                loading ? <Loading/> :
                result?.name ? <Result/> :
                noResult ? <p>{noResult}</p>
                : <p>El clima se va a mostrar aquí</p>
            }
            
        </main>
    </>
  )
}

export default WeatherApp