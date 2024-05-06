import Header from './Header'
import Filter from './Filter'
import Doctors from './Doctors'
import RegistroCita from './RegistroCita'
import Message from './Message'
import btn from '../styles/Btn.module.css'
import { useState } from 'react'
const PCitas = ({setMostrarComponentes,doctores,setCitasMedicas,citasMedicas,mostrarSideBar,setMostrarSideBar}) => {

    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState("")
    const [newAppointment, setNewAppointment] = useState({})
    const [mostrarPestaña, setMostrarPestaña] = useState("Principal")

    const renderizadorPCitas = () => {
        switch (mostrarPestaña) {
            case "Principal":
                const handleClick = () => {
                    setMostrarSideBar(!mostrarSideBar)
                    console.log(mostrarSideBar)
                  }
                
                return (
                    <>
                        <div className={btn.menuBtn}>
                            <i onClick={handleClick} className="fas fa-bars fa-2x"></i>
                        </div>
                        <Header setMostrarComponentes={setMostrarComponentes} setMostrarSideBar = {setMostrarSideBar} mostrarSideBar = {mostrarSideBar}/>
                        <Filter search={search} setSearch={setSearch} selected={selected} setSelected={setSelected}/>
                        <Doctors doctores={doctoresFiltrados} setMostrarPestaña={setMostrarPestaña} 
                        setNewAppointment={setNewAppointment}/>
                    </>
                )
            case "Registro de Cita":
                return (
                    <RegistroCita newAppointment={newAppointment} setMostrarPestaña={setMostrarPestaña} 
                    setNewAppointment={setNewAppointment} setCitasMedicas={setCitasMedicas} citasMedicas={citasMedicas}/>
                )
            case "Message":
                return (
                    <Message setMostrarPestaña={setMostrarPestaña}/>
                )
        }
    }

    const doctoresFiltrados = doctores.filter((doctor) => {
        return doctor.nombreCompletoDoctor.toLowerCase().includes(search.toLowerCase()) && 
        doctor.especialidad.toLowerCase().includes(selected.toLowerCase())
    })

    return(
        <>
            {renderizadorPCitas()}
        </>
    )
}

export default PCitas