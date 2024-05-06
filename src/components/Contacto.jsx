import Header from './Header'
import style from '../styles/Contacto.module.css'
import btn from '../styles/Btn.module.css'
import { useState } from 'react'
const Contacto = ({setMostrarComponentes,mostrarSideBar,setMostrarSideBar}) => {

    const [asuntoValue, setAsuntoValue] = useState('')
    const [mensajeValue, setMensajeValue] = useState('')

    const handleClick = () => {
        setMostrarSideBar(!mostrarSideBar)
        console.log(mostrarSideBar)
    }

    const handleSendMessage = () => {
        if(asuntoValue === '' || mensajeValue === ''){
            window.alert('Todos los campos son obligatorios')
        }else{
            setAsuntoValue('')
            setMensajeValue('')
            window.alert('Mensaje enviado exitosamente')
        }
    }
    
    return(
        <>
            <div className={btn.menuBtn}>
                <i onClick={handleClick} className="fas fa-bars fa-2x"></i>
            </div>
            <Header setMostrarComponentes={setMostrarComponentes} setMostrarSideBar = {setMostrarSideBar} mostrarSideBar = {mostrarSideBar}/>
            <div className={style.container}>
                <div className={style.contacto}> 
                    <h1>ESCRIBE TU MENSAJE</h1>
                    <input type="text" placeholder='Asunto*' className={style.asunto} value={asuntoValue} onChange={(e) => setAsuntoValue(e.target.value)}/>
                    <input type="text" placeholder='Mensaje*'className={style.mensaje} value={mensajeValue} onChange={(e) => setMensajeValue(e.target.value)}/>
                    <button onClick={handleSendMessage}>Enviar</button>
                </div>
                <div className={style.icons}>
                    <span>
                        <i class="fa-regular fa-envelope"></i>
                        <p>qZ2Zc@example.com</p>
                    </span>
                    <span>
                        <i class="fa-solid fa-phone"></i>
                        <p>+51 9 1234 5678</p>
                    </span>
                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Calle 123, CABA</p>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Contacto