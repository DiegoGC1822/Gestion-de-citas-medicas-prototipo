import MHistory from './MHistory'
import MyAppointments from './MyAppointments'
import styles from '../styles/Inicio.module.css'
import btn from '../styles/Btn.module.css'
import Header from './Header'
import Diagnosis from './Diagnosis'
import { useState } from 'react'

const Inicio = ({citasMedicas,setCitasMedicas,setMostrarComponentes,mostrarSideBar,setMostrarSideBar}) => {

    const [visibleInicio, setVisibleInicio] = useState(true)
    const [cita, setCita] = useState({})

    const inicioVisible = () => {
      const handleClick = () => {
        setMostrarSideBar(!mostrarSideBar)
        console.log(mostrarSideBar)
      }

      return visibleInicio? (
      <>
        <div className={btn.menuBtn}>
          <i onClick={handleClick} className="fas fa-bars fa-2x"></i>
        </div>
        <Header setMostrarComponentes={setMostrarComponentes} mostrarSideBar={mostrarSideBar}/>
        <div className= {styles.Inicio}>
          <MHistory/>
          <MyAppointments citasMedicas={citasMedicas} setVisibleInicio={setVisibleInicio} setCita={setCita} setCitasMedicas={setCitasMedicas}/>
        </div>
      </>
      ) : (<Diagnosis cita={cita} setVisibleInicio={setVisibleInicio}/>);
    }

    return (
      inicioVisible()
    )
}

export default Inicio