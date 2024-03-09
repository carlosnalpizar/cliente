import React from 'react'
import '../css/Login.css'

const Login = () => {
    return (
    <div>
    <div className='Login'>
    <form>
        <label>Cedula</label>
        <input type="text" id="firstname1" name="idProducto"></input>
        <label >Contrasena</label>
        <input type="text" id="firstname2" name="nombreProducto"></input>
        <button type="submit">Registrar</button>
    </form>
    </div>
    </div>
    )
}

export default Login
