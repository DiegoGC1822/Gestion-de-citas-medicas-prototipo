import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import PCitas from './components/PCitas'
import Doctorfoto from './assets/doctor.png'
import { useState } from 'react'

function App() {

  const CitasMedicasActuales = [
    {
      id: 1,
      horario: new Date(2023,11,12,10,0,0),
      nombreDoctor: 'Dario Lopez',
      nombreCompletoDoctor: 'Dario Francisco Lopez Gomez',
      especialidad: 'Odontologia',
      pendiente: false,
      motivoCita: 'Examen dental de rutina',
      diagnostico: 'Sin caries, pero se recomienda limpieza profunda',
      medicinas: 'no necesario',
      tratamiento: 'Programar limpieza dental profunda en la próxima cita.'
    },
    {
      id: 2,
      horario: new Date(2023,11,30,12,0,0),
      nombreDoctor: 'Maria Zuñiga',
      nombreCompletoDoctor: 'Maria Luisa Zuñiga Sandoval',
      especialidad: 'Oftalmologia',
      pendiente: false,
      motivoCita: 'Consulta de seguimiento para revisión de prescripción de anteojos',
      diagnostico: 'Leve miopía, no hay cambios significativos desde la última visita',
      medicinas: 'no necesario',
      tratamiento: 'Mantener la prescripción actual de anteojos, programar una nueva consulta en 6 meses.'
    },
    {
      id: 3,
      horario: new Date(2024,0,5,14,0,0),
      nombreDoctor: 'Mateo Mendoza',
      nombreCompletoDoctor: 'Mateo Alejandro Mendoza Gonzalez',
      especialidad: 'Dermatologia',
      pendiente: false,
      motivoCita: 'Evaluación de erupciones cutáneas',
      diagnostico: 'Dermatitis leve debido a alergia a ciertos productos de cuidado de la piel',
      medicinas: 'Crema hidratante sin fragancia',
      tratamiento: 'Evitar productos de cuidado de la piel con fragancias, seguir con la crema hidratante.'
    },
    {
      id: 4,
      horario: new Date(2024,0,8,14,0,0),
      nombreDoctor: 'Julio Ayala',
      nombreCompletoDoctor: 'Julio Cesar Ayala Garcia',
      especialidad: 'Odontologia',
      pendiente: false,
      motivoCita: 'Extracción de muela del juicio',
      diagnostico: 'Muela del juicio impactada',
      medicinas: 'Analgésicos y antibióticos postoperatorios',
      tratamiento: 'Programar cirugía de extracción de muela del juicio, seguir las indicaciones postoperatorias.'
    },
    {
      id: 5,
      horario: new Date(2024,1,8,15,0,0),
      nombreDoctor: 'Julio Ayala',
      nombreCompletoDoctor: 'Julio Cesar Ayala Garcia',
      especialidad: 'Odontologia',
      pendiente: false,
      motivoCita: 'Revisión postoperatoria de extracción de muela del juicio',
      diagnostico: 'Proceso de curación normal, no hay signos de infección',
      medicinas: 'no necesario',
      tratamiento: 'Recomendar enjuague bucal suave y dieta blanda por 1 semana.'
    },
    {
      id: 6,
      horario: new Date(2024,1,20,14,0,0),
      nombreDoctor: 'Luna Duarez',
      nombreCompletoDoctor: 'Luna Sofia Duarez Jimenez',
      especialidad: 'Cardiologia',
      pendiente: false,
      motivoCita: 'Evaluación de presión arterial alta',
      diagnostico: 'Hipertensión leve',
      medicinas: 'Prescripción de medicamento antihipertensivo',
      tratamiento: 'Iniciar medicamento y monitorear la presión arterial regularmente.'
    },
    {
      id: 7,
      horario: new Date(2024,4,10,16,0,0),
      nombreDoctor: 'Rodrigo Alcazar',
      nombreCompletoDoctor: 'Rodrigo Manuel Alcazar Vargas',
      especialidad: 'Psicología',
      pendiente: true,
      motivoCita: 'Terapia para manejo del estrés',
    }
  ]

  const doctores = [
    {
      id: 1,
      nombreCompletoDoctor: 'Dario Francisco Lopez Gomez',
      nombreDoctor: 'Dario Lopez',
      especialidad: 'Odontologia',
      foto: Doctorfoto
    },
    {
      id: 2,
      nombreCompletoDoctor: 'Maria Luisa Zuñiga Sandoval',
      nombreDoctor: 'Maria Zuñiga',
      especialidad: 'Oftalmologia',
      foto: Doctorfoto
    },
    {
      id: 3,
      nombreCompletoDoctor: 'Mateo Alejandro Mendoza Gonzalez',
      nombreDoctor: 'Mateo Mendoza',
      especialidad: 'Dermatologia',
      foto: Doctorfoto
    },
    {
      id: 4,
      nombreCompletoDoctor: 'Julio Cesar Ayala Garcia',
      nombreDoctor: 'Julio Ayala',
      especialidad: 'Odontologia',
      foto: Doctorfoto
    },
    {
      id: 5,
      nombreCompletoDoctor: 'Luna Sofia Duarez Jimenez',
      nombreDoctor: 'Luna Duarez',
      especialidad: 'Cardiologia',
      foto: Doctorfoto
    },
    {
      id: 6,
      nombreCompletoDoctor: 'Rodrigo Manuel Alcazar Vargas',
      nombreDoctor: 'Rodrigo Alcazar',
      especialidad: 'Psicologia',
      foto: Doctorfoto
    },
    {
      id: 7,
      nombreCompletoDoctor: 'Sebastian Josue Reyes Serna',
      nombreDoctor: 'Sebastian Serna',
      especialidad: 'Nutricionismo',
      foto: Doctorfoto
    }
  ]

  const [citasMedicas, setCitasMedicas] = useState(CitasMedicasActuales);
  const [mostrarComponentes, setMostrarComponentes] = useState("Inicio");
  const [mostrarSideBar, setMostrarSideBar] = useState(false);

  const renderizador = () => {
    switch (mostrarComponentes) {
      case "Inicio":
        return <Inicio citasMedicas={citasMedicas} setCitasMedicas={setCitasMedicas} 
        setMostrarSideBar={setMostrarSideBar} mostrarSideBar={mostrarSideBar} setMostrarComponentes={setMostrarComponentes}/>
      case "PCitas":
        return <PCitas setMostrarComponentes={setMostrarComponentes} doctores = {doctores} 
        setMostrarSideBar = {setMostrarSideBar} mostrarSideBar = {mostrarSideBar} setCitasMedicas = {setCitasMedicas} citasMedicas = {citasMedicas}/>
      case "Contacto":
        return <Contacto setMostrarComponentes={setMostrarComponentes} setMostrarSideBar = {setMostrarSideBar} mostrarSideBar = {mostrarSideBar}/>
      default:
        return null
    }
  }

  return (
    <>
      {renderizador()}
    </>
  )
}

export default App
