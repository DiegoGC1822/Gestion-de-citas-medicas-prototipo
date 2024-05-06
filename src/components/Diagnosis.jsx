import styles from '../styles/Card.module.css'
const Diagnosis = ({cita,setVisibleInicio}) => (
    <div className= {styles.container}>
        <div className={styles.tarjeta}>
            <h1>Detalles de la cita</h1>
            <hr/>
            <p>DOCTOR: {cita.nombreCompletoDoctor}</p>
            <p>ESPECIALIDAD: {cita.especialidad}</p>
            <p>MOTIVO DE LA CITA: {cita.motivoCita}</p>
            <p>DIAGNOSTICO: {cita.diagnostico}</p>
            <p>TRATAMIENTO: {cita.tratamiento}</p>
            <p>MEDICINAS: {cita.medicinas}</p>
            <button onClick={() => setVisibleInicio(true)}>Regresar a inicio</button>
            <button onClick={() => window.print()}>Imprimir</button>
        </div>
    </div>
)

export default Diagnosis