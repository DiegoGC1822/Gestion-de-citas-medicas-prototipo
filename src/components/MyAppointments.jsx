import Appointment from "./Appointment"
import styles from '../styles/MyAppointments.module.css'
const MyAppointments = ({citasMedicas,setVisibleInicio,setCita,setCitasMedicas}) => (
    <>
        <section>
            <h1 style={{marginTop:'0'}}>MIS CITAS</h1>
            <div className={styles.containertable}>
                <table className= {styles.table}>
                    <thead>
                        <tr style={{backgroundColor: '#12b0b9'}}>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Doctor</th>
                            <th>Especialidad</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citasMedicas.slice().reverse().map((citaMedica) => (
                            <Appointment citaMedica={citaMedica} setVisibleInicio={setVisibleInicio} 
                            setCita={setCita} setCitasMedicas={setCitasMedicas} citasMedicas={citasMedicas} key={citaMedica.id} />
                        ))}
                    </tbody>    
                </table>
            </div>
        </section>
    </>
)

export default MyAppointments