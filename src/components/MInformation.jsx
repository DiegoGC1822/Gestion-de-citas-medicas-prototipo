const MInformation = ({citaMedica}) => (
    <>
        <tr style={{textAlign: 'center', backgroundColor: '#f3f3f3'}}>
            <td>{citaMedica.fecha}</td>
            <td>{citaMedica.hora}</td>
            <td>{citaMedica.doctor}</td>
            <td>{citaMedica.especialidad}</td>
            <td><button>Ver Detalle</button></td>
        </tr>
    </>
)

export default MInformation