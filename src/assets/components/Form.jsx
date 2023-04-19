import { useState } from "react"
import useWeather from "../hooks/useWeather"



const Form = () => {

    const [alerta, setAlerta] = useState('')

    const  {research, searchData, consultWeather} = useWeather()

    const {ciudad, pais} = research

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(research).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultWeather(research)
    }

  return (
    <div className="contenedor">

        {alerta && <p className="alert">{alerta}</p>}

        <form
            onSubmit={handleSubmit}
        >
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    onChange={searchData}
                    value={ciudad}
                />
            </div>
            <div className="campo">
                <label htmlFor="pais">País</label>
                <select 
                    id="pais"
                    name="pais" 
                    onChange={searchData}
                    value={pais}
                >
                    <option value="">Select a country</option>
                    <option value="US">Unite States</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <input 
                type="submit"
                value='Check Weather' 
            />
        </form>
    </div>
  )
}

export default Form