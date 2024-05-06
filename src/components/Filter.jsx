import styles from '../styles/Filter.module.css'

const Filter = ({search,setSearch,selected,setSelected}) => {
    return(
        <div className={styles.Filter}>
            <form>
                <label htmlFor="pcitas">Busca un medico:</label>
                <input id="pcitas" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </form>
            <form>
                <label htmlFor="especialidad">Elige una especialidad:</label>
                <select id="especialidad" value={selected} onChange={(e) => setSelected(e.target.value)}> 
                    <option value="">Todas</option>
                    <option value="Oftalmologia">Oftalmologia</option>
                    <option value="Odontologia">Odontologia</option>
                    <option value="Psicologia">Psicologia</option>
                    <option value="Dermatologia">Dermatologia</option>
                    <option value="Cardiologia">Cardiologia</option>
                    <option value="Nutricionismo">Nutricionismo</option>
                </select>
            </form>
        </div>
    )
}

export default Filter;
