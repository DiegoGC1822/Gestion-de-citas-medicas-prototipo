import MHistory from './MHistory'
import TarjetaCita from './TarjetaCita'
import MyAppointments from './MyAppointments'
import styles from '../styles/Inicio.module.css'

const Inicio = () => {

    const citasMedicas = [
        {
          id: 1,
          horario: new Date(2023,11,12,10,0,0),
          doctor: 'Dario Lopez',
          especialidad: 'Odontologia',
          pendiente: false
        },
        {
          id: 2,
          horario: new Date(2023,11,30,12,0,0),
          doctor: 'Maria Zuñiga',
          especialidad: 'Oftalmologia',
          pendiente: false
        },
        {
          id: 3,
          horario: new Date(2024,0,5,14,0,0),
          doctor: 'Mateo Mendoza',
          especialidad: 'Dermatologia',
          pendiente: false
        },
        {
          id: 4,
          horario: new Date(2024,0,8,14,0,0),
          doctor: 'Julio Ayala',
          especialidad: 'Odontologia',
          pendiente: false
        },
        {
          id: 5,
          horario: new Date(2024,1,8,15,0,0),
          doctor: 'Julio Ayala',
          especialidad: 'Odontologia',
          pendiente: false
        },
        {
          id: 6,
          horario: new Date(2024,1,20,14,0,0),
          doctor: 'Luna Duarez',
          especialidad: 'Cardiologia',
          pendiente: false
        },
        {
          id: 7,
          horario: new Date(2024,4,10,16,0,0),
          doctor: 'Rodrigo Alcazar',
          especialidad: 'Psicología',
          pendiente: true
        }
      ]

    const fechaFormateada = (citaMedica) => {
        let dia = citaMedica.horario.getDate();
        let mes = citaMedica.horario.getMonth() + 1; 
        let año = citaMedica.horario.getFullYear();
        dia = dia < 10 ? "0" + dia : dia;
        mes = mes < 10 ? "0" + mes : mes;
        return `${dia}/${mes}/${año}`    
    }

    const horaFormateada = (citaMedica) => {
        let horas = citaMedica.horario.getHours();
        let minutos = citaMedica.horario.getMinutes();
        horas = horas < 10 ? "0" + horas : horas;
        minutos = minutos < 10 ? "0" + minutos : minutos;
        return `${horas}:${minutos}`    
    }

    const ultimaCita = (citasMedicas) => citasMedicas.slice().reverse().find(cita => !cita.pendiente)

    const proxCita = (citasMedicas) => citasMedicas.slice().reverse().find(cita => cita.pendiente)

    return (
        <div className= {styles.Inicio}>
        <MHistory/>
        <section className='CitasHistorial'>
          <MyAppointments citasMedicas={citasMedicas} fechaFormateada={fechaFormateada} horaFormateada={horaFormateada}/>
          <div className={styles.Citas}>
            <TarjetaCita cita={ultimaCita(citasMedicas)} fechaFormateada={fechaFormateada(ultimaCita(citasMedicas))} 
            horaFormateada={horaFormateada(ultimaCita(citasMedicas))}/>
            <TarjetaCita cita={proxCita(citasMedicas)} fechaFormateada={fechaFormateada(proxCita(citasMedicas))} 
            horaFormateada={horaFormateada(proxCita(citasMedicas))}/>
          </div>
        </section>
      </div>
    )
}

export default Inicio