import styles from '../styles/Card.module.css'
const MHistory = () => (
    <>
        <section>
            <div className={styles.tarjeta}>
                <h1>HISTORIAL MEDICO</h1>
                <hr/>
                <h2>Datos personales</h2>
                <ul>
                    <li>Nombre: Juan</li>
                    <li>Apellido: Perez</li>
                    <li>Edad: 25</li>
                    <li>Sexo: Masculino</li>
                    <li>Correo: juan_p123@gmail.com</li>
                    <li>Telefono: 123456789</li>
                    <li>Fecha de nacimiento: 12/12/1999</li>
                    <li>Dirección: calle Chorrillos 123</li>
                </ul>
                <h2>Antecedentes Médicos</h2>
                <ul>
                    <li>Alergias: Penicilina</li>
                    <li>Condiciones Crónicas: Hipertensión arterial</li>
                    <li>Cirugías Anteriores: Apendicectomía</li>
                    <li>Traumatismos importantes: Ninguno conocido</li>
                    <li>Historial de enfermedades familiares: Padre con diabetes tipo 2, madre con hipertensión arterial</li>
                </ul>
            </div>
        </section>
    </>
)

export default MHistory