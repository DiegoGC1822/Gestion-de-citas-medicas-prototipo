const Appointment = ({citaMedica,setVisibleInicio,setCita,setCitasMedicas,citasMedicas}) => {

    const fechaFormateada = () => {
        let dia = citaMedica.horario.getDate();
        let mes = citaMedica.horario.getMonth() + 1; 
        let año = citaMedica.horario.getFullYear();
        dia = dia < 10 ? "0" + dia : dia;
        mes = mes < 10 ? "0" + mes : mes;
        return `${dia}/${mes}/${año}`    
    }

    const horaFormateada = () => {
        let horas = citaMedica.horario.getHours();
        let minutos = citaMedica.horario.getMinutes();
        horas = horas < 10 ? "0" + horas : horas;
        minutos = minutos < 10 ? "0" + minutos : minutos;
        return `${horas}:${minutos}`    
    }

    const cancelarCita = () => {
        if(window.confirm("¿Desea cancelar la cita?")){
            const citasFiltradas = citasMedicas.filter((cita) => cita.id !== citaMedica.id)
            setCitasMedicas(citasFiltradas)
        }
    }

    return(
        <>
            <tr style={{textAlign: 'center', backgroundColor: '#f3f3f3'}}>
                <td>{fechaFormateada()}</td>
                <td>{horaFormateada()}</td>
                <td>{citaMedica.nombreDoctor}</td>
                <td>{citaMedica.especialidad}</td>
                {citaMedica.pendiente ? <td><button onClick={cancelarCita} style={{backgroundColor: 'red'}}>Cancelar cita</button></td> :
                                        <td><button onClick={() => {
                                            setVisibleInicio(false)
                                            setCita(citaMedica)
                                            }}>Ver Detalle</button></td>}
            </tr>
        </>
    )
}

export default Appointment