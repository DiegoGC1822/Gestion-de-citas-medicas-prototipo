import styles from '../styles/Header.module.css';
import { useState, useEffect } from 'react';
const Header = ({setMostrarComponentes,mostrarSideBar}) => {

    const [width, setWidth] = useState(undefined)
    
      useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth);
        }
        
        window.addEventListener("resize", handleResize);
        
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
      }, []); 

    return(
        <header className={styles.header}>
            <nav>
                <h1>SIGECI</h1>
                <ul style={mostrarSideBar && width < 650? {transform: 'translateX(-100%)'}: {transform: 'translateX(0)'}}>
                    <li>
                        <a href="#" onClick={() => setMostrarComponentes('PCitas')}>Programa una cita</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setMostrarComponentes('Inicio')}>Inicio</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setMostrarComponentes('Contacto')}>Contactanos</a>
                    </li>
                </ul>
            </nav>
        </header>  
    )  
}

export default Header