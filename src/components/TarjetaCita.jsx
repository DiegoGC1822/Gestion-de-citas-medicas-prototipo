import styles from '../styles/Card.module.css'
const TarjetaCita = ({cita,fechaFormateada,horaFormateada}) => (
    <>
            <div className={styles.tarjeta}>
                <h1>{cita.pendiente? 'Proxima Cita' : 'Ultima Cita'}</h1>
                <ul>
                    <li>Fecha: {fechaFormateada}</li>
                    <li>Hora: {horaFormateada}</li>
                    <li>Doctor: {cita.doctor}</li>
                    <li>Especialidad: {cita.especialidad}</li>
                </ul>
                <button>{cita.pendiente? 'Cancelar Cita' : 'Ver Detalle'}</button>
            </div>
    </>
)

export default TarjetaCita