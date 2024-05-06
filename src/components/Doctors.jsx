import card from '../styles/Card.module.css'
import styles from '../styles/Doctors.module.css'

const Doctors = ({doctores, setMostrarPestaña, setNewAppointment}) => {

    const handleClick = (doctor) => {
        setMostrarPestaña("Registro de Cita")
        setNewAppointment({nombreDoctor:doctor.nombreDoctor, 
                           especialidad: doctor.especialidad, 
                           nombreCompletoDoctor: doctor.nombreCompletoDoctor})
    }

    return (
        <div className={styles.container}>
            {doctores.map(doctor => (
                <div className={card.tarjeta} key={doctor.id}>
                    <img src={doctor.foto} alt="doctor" />
                    <h3>{doctor.nombreCompletoDoctor}</h3>
                    <p>{doctor.especialidad}</p>
                    <button onClick={() => handleClick(doctor)}>Programar cita</button>
                </div>
            ))}
        </div>
    )
}

export default Doctors