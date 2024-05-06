import card from '../styles/Card.module.css'
const Message = ({setMostrarPestaña}) => {
    return (
        <div className= {card.container}>
            <div className={card.tarjeta} style={{width: '50%'}}>
                <h1 className={card.titulo}>SE HA REGISTRADO LA CITA EXITOSAMENTE</h1>
                <button onClick={() => setMostrarPestaña("Principal")} style={{fontSize:'30px'}}>Regresar</button>
            </div>
        </div>
    )
}

export default Message