import Header from './components/Header'
import PInformation from './components/PInformation'
import ProxCita from './components/ProxCita'
import MHistory from './components/MHistory'
import UltCita from './components/UltCita'
import './App.css'

function App() {

  const citasMedicas = [
    {
      id: 1,
      fecha: '12/12/2022',
      hora: '10:00',
      doctor: 'Dario Lopez',
      especialidad: 'Odontologia',
    },
    {
      id: 2,
      fecha: '15/12/2022',
      hora: '12:00',
      doctor: 'Maria Zuñiga',
      especialidad: 'Oftalmologia',
    },
    {
      id: 3,
      fecha: '18/12/2022',
      hora: '14:00',
      doctor: 'Dario Lopez',
      especialidad: 'Odontologia',
    },
    {
      id: 4,
      fecha: '21/12/2022',
      hora: '16:00',
      doctor: 'Maria Zuñiga',
      especialidad: 'Oftalmologia',
    }
  ]

  return (
    <>
      <Header/>
      <div className= "Inicio">
        <PInformation/>
        <div className="CitasHistorial">
          <MHistory citasMedicas={citasMedicas}/>
          <div className='Citas'>
            <ProxCita/>
            <UltCita/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
