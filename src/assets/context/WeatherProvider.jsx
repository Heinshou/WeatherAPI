import { useState, createContext } from "react";
import axios from 'axios'

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {


    const [research, setResearch] = useState({
        ciudad: '',
        pais: ''    
    })
    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(false)
    const [noResult, setNoResult] = useState(false)

    const searchData = e => {
        setResearch({
            ...research,
            [e.target.name]: e.target.value
        })
    }

    const consultWeather = async datos  => {
        setLoading(true)
        setNoResult(false)

    try{
        const {ciudad, pais} = datos

        const appId = import.meta.env.VITE_API_KEY
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
        console.log(url)
        const {data} = await axios(url)
        const {lat, lon} = data[0]
        const urlWeather = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

        const {data: clima} = await axios(urlWeather)
        setResult(clima)
    } catch(error){
        setNoResult('No hay resultados')
    } finally {
        setLoading(false)
    }
    }

    return (
        <WeatherContext.Provider
        value={{
            research,
            searchData,
            consultWeather,
            result,
            loading,
            noResult
        }}
    >
        {children}
        </WeatherContext.Provider>
    )
}

export {
    WeatherProvider
}

export default WeatherContext