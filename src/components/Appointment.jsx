const Appointment = ({citaMedica,fechaFormateada,horaFormateada}) => {

    return(
        <>
            <tr style={{textAlign: 'center', backgroundColor: '#f3f3f3'}}>
                <td>{fechaFormateada}</td>
                <td>{horaFormateada}</td>
                <td>{citaMedica.doctor}</td>
                <td>{citaMedica.especialidad}</td>
                {citaMedica.pendiente ? <td>No disponible</td> :<td><button>Ver Detalle</button></td>}
            </tr>
        </>
    )
}

export default Appointment