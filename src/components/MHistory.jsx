import MInformation from "./MInformation"
import '../styles/MHistory.css'
const MHistory = ({citasMedicas}) => (
    <>
        <section className="MHistory">
            <h1>Mis Citas</h1>
            <div className="containertable">
                <table style={{width: '100%',height: 'auto'}}>
                    <thead>
                        <tr style={{backgroundColor: '#12b0b9'}}>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Doctor</th>
                            <th>Especialidad</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                        {citasMedicas.map((citaMedica) => (
                            <MInformation citaMedica={citaMedica} key={citaMedica.id} />
                        ))}    
                </table>
            </div>
        </section>
    </>
)

export default MHistory