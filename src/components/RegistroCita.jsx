import styles from '../styles/Card.module.css'
import { useState } from 'react'

const RegistroCita = ({newAppointment,setNewAppointment,setMostrarPestaña,setCitasMedicas,citasMedicas}) => {

    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [motivoCita, setMotivoCita] = useState("")

    const handleRegister = () => {
        if(fecha === "" || hora === "" || motivoCita === "") {
            alert("Todos los campos son obligatorios")
        } if(new Date(`${fecha}T${hora}`) < new Date()){
            alert("La fecha no puede ser menor a la fecha actual")
        }else {
            const fechaYHora = `${fecha}T${hora}`
            const updatedAppointment = { ...newAppointment, horario: new Date(fechaYHora), pendiente: true, motivoCita: motivoCita}
            setNewAppointment(updatedAppointment)
            setCitasMedicas(citasMedicas.concat({...updatedAppointment, id: citasMedicas.length + 1}))
            setMostrarPestaña("Message")
        }
    } 

    return (
        <div className= {styles.container}>
            <div className={styles.tarjeta}>
                <h1>Registro de Cita</h1>
                <hr/>
                <p>DOCTOR: {newAppointment.nombreDoctor}</p>
                <p>ESPECIALIDAD: {newAppointment.especialidad}</p>
                <form>
                    <label htmlFor="Dia">DIA:</label><input type="date" id='Dia' onChange={(e) => setFecha(e.target.value)}/>
                    <label htmlFor="Hora">HORA:</label><input type="time" id='Hora' onChange={(e) => setHora(e.target.value)}/>
                    <label htmlFor="MotivoCita">MOTIVO DE LA CITA:</label><input type="text" id="MotivoCita" onChange={(e) => setMotivoCita(e.target.value)}/>
                </form>
                <button onClick={() => setMostrarPestaña("Principal")}>Cancelar</button>
                <button onClick={handleRegister}>Registrar Cita</button>
            </div>
        </div>
    )
}

export default RegistroCita