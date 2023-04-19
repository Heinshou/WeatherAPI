import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const LocalWeather = () => {

    const [obj, setObj] = useState()
    const [weather, setWeather] = useState()

    let lon, lat

    useEffect(() => {

        const sucess = pos => {
            lon = pos.coords.longitude
            lat = pos.coords.latitude
            setObj({ lon, lat })
        }

        navigator.geolocation.getCurrentPosition(sucess)


    }, [])


    const API_key = '2b8bfd41f4f34bda243708cdc4007a75'

    useEffect(() => {
        if (obj !== undefined) {
            const url = (`https://api.openweathermap.org/data/2.5/weather?lat=${obj?.lat}&lon=${obj?.lon}&appid=${API_key}`)

            axios.get(url)
                .then(res => setWeather(res.data))
                .catch(err => console.log(err))

        }
    }, [obj])


    return (
        <div className='local__weather__container'>
            <div className='margin__top'>
            <h2 className='name__local__weather'>{`${weather?.name}, `}{`${weather?.sys.country}`}</h2>
            </div>
            <div className='display__flex'>
                <div>
                    <img src={weather && `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@4x.png`} alt="weather example image" />
                </div>
                <div>
                    <h3 className='title__temp'>{`${weather?.weather[0].main}`}</h3>
                    <p className='actual__temp'>{`${Math.trunc(weather?.main.temp - 273)}`}<span>&#x2103;</span></p>
                    <div className='temp__min__max'>
                        <p className='actualTemp'>Max  {`${parseInt(weather?.main.temp_max - 273)}`}<span>&#x2103;</span></p>
                        <p className='actualTemp'>Min  {`${parseInt(weather?.main.temp_min - 273)}`}<span>&#x2103;</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocalWeather